import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_BASE_URL = 'https://www.angelassistancecare.com.au';
const SITE_URL = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) || DEFAULT_BASE_URL;

const SEO = ({
  title = 'Angel Assistance Care | NDIS Support & Disability Care Australia',
  description = 'Angel Assistance Care provides compassionate, person-centred NDIS disability support services across Victoria, Australia.',
  keywords = 'Angel Assistance Care, Angel Assistance, Angel Assist, NDIS support services, disability support Melton Victoria',
  canonical,
  ogType = 'website',
  ogImage = `${SITE_URL}/og-preview.jpg`,
  jsonLd = null,
}) => {
  const location = useLocation();
  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : `${SITE_URL}${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set/update meta tag
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag('name', 'title', title);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:site_name', 'Angel Assistance Care');
    setMetaTag('property', 'og:locale', 'en_AU');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:card', 'summary_large_image');

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Page-Specific JSON-LD Schema
    const existingScript = document.getElementById('page-specific-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'page-specific-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.getElementById('page-specific-jsonld');
      if (scriptToRemove) scriptToRemove.remove();
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, jsonLd]);

  return null;
};

export default SEO;
