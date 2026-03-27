import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const useSEO = ({ title, description, keywords, ogImage, ogUrl }: SEOProps) => {
  useEffect(() => {
    const fullTitle = title.includes('ECAPPZ') ? title : `${title} | ECAPPZ`;
    document.title = fullTitle;

    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const isProperty = selector.includes('property=');
        const attrName = isProperty ? 'property' : 'name';
        const attrValue = selector.match(/"([^"]+)"/)?.[1] || '';
        
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    setMetaTag('meta[name="description"]', 'content', description);
    
    if (keywords) {
      setMetaTag('meta[name="keywords"]', 'content', keywords);
    }

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', fullTitle);
    setMetaTag('meta[property="og:description"]', 'content', description);
    if (ogImage) setMetaTag('meta[property="og:image"]', 'content', ogImage);
    if (ogUrl) setMetaTag('meta[property="og:url"]', 'content', ogUrl);

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    if (ogImage) setMetaTag('meta[name="twitter:image"]', 'content', ogImage);
    if (ogUrl) setMetaTag('meta[name="twitter:url"]', 'content', ogUrl);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', ogUrl || window.location.href);

  }, [title, description, keywords, ogImage, ogUrl]);
};
