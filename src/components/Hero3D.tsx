import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Float, Grid, Sphere, Line } from '@react-three/drei';
import * as THREE from 'three';

const TechCore = () => {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (coreRef.current && outerRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
      coreRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      outerRef.current.rotation.y = -state.clock.getElapsedTime() * 0.1;
      outerRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Inner solid core */}
      <Icosahedron ref={coreRef} args={[1.2, 1]} scale={1}>
        <meshStandardMaterial
          color="#06B6D4"
          wireframe={false}
          roughness={0.2}
          metalness={0.8}
          emissive="#06B6D4"
          emissiveIntensity={0.2}
        />
      </Icosahedron>
      {/* Outer wireframe shell */}
      <Icosahedron ref={outerRef} args={[1.8, 2]} scale={1}>
        <meshStandardMaterial
          color="#3B82F6"
          wireframe={true}
          transparent
          opacity={0.4}
        />
      </Icosahedron>
    </Float>
  );
};

const NeuralNetwork = ({ count = 50 }) => {
  const nodes = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
    }));
  }, [count]);

  const groupRef = useRef<THREE.Group>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const lineGeometry = useMemo(() => new THREE.BufferGeometry(), []);
  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
    color: 0x06B6D4,
    transparent: true,
    opacity: 0.15
  }), []);

  useFrame(() => {
    if (!groupRef.current || !linesRef.current) return;

    const positions: number[] = [];
    
    // Update node positions
    nodes.forEach((node, i) => {
      node.position.add(node.velocity);
      
      // Bounce off bounds
      if (Math.abs(node.position.x) > 10) node.velocity.x *= -1;
      if (Math.abs(node.position.y) > 10) node.velocity.y *= -1;
      if (Math.abs(node.position.z) > 10) node.velocity.z *= -1;

      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.position.copy(node.position);

      // Check connections
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = node.position.distanceTo(nodes[j].position);
        if (distance < 4) {
          positions.push(
            node.position.x, node.position.y, node.position.z,
            nodes[j].position.x, nodes[j].position.y, nodes[j].position.z
          );
        }
      }
    });

    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  });

  return (
    <>
      <group ref={groupRef}>
        {nodes.map((node, i) => (
          <mesh key={i} position={node.position}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial color="#06B6D4" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>
      <lineSegments ref={linesRef} geometry={lineGeometry} material={lineMaterial} />
    </>
  );
};

export const Hero3D = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <fog attach="fog" args={['#030712', 5, 20]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06B6D4" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} color="#3B82F6" />
        
        <TechCore />
        <NeuralNetwork count={80} />
        
        <Grid
          position={[0, -4, 0]}
          args={[40, 40]}
          cellSize={1}
          cellThickness={1}
          cellColor="#06B6D4"
          sectionSize={5}
          sectionThickness={1.5}
          sectionColor="#1D4ED8"
          fadeDistance={25}
          fadeStrength={1.5}
        />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/60 to-background" />
    </div>
  );
};
