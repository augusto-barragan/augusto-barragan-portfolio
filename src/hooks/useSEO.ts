import { useEffect } from 'react';

const SITE_URL = 'https://augustobarragan.com';
const DEFAULT_TITLE = 'Augusto Barragán — Visual Designer';
const DEFAULT_DESCRIPTION =
  "Augusto Barragán, Senior Visual Designer en Bogotá — UX, UI y motion design. 15+ años de experiencia diseñando productos digitales para marcas como Dick's Sporting Goods, PepsiCo, Sportian y DirectvGo.";

interface SEOOptions {
  /** Page-specific title, combined as "{title} — Augusto Barragán". Omit to use the site default. */
  title?: string;
  /** Page-specific meta description. Omit to use the site default. */
  description?: string;
  /** Route path (e.g. "/work/sportian") used to build the canonical/og:url. Defaults to "/". */
  path?: string;
}

function setMetaContent(selector: string, attribute: string, value: string) {
  document.querySelector(selector)?.setAttribute(attribute, value);
}

/** Updates the document title and meta/OG/Twitter tags for the current route. */
export function useSEO({ title, description, path = '/' }: SEOOptions = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — Augusto Barragán` : DEFAULT_TITLE;
    const fullDescription = description ?? DEFAULT_DESCRIPTION;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMetaContent('meta[name="description"]', 'content', fullDescription);
    setMetaContent('meta[property="og:title"]', 'content', fullTitle);
    setMetaContent('meta[property="og:description"]', 'content', fullDescription);
    setMetaContent('meta[property="og:url"]', 'content', url);
    setMetaContent('meta[name="twitter:title"]', 'content', fullTitle);
    setMetaContent('meta[name="twitter:description"]', 'content', fullDescription);
    setMetaContent('link[rel="canonical"]', 'href', url);
  }, [title, description, path]);
}
