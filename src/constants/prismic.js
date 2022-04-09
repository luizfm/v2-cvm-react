import React from 'react';

import Hero from '_components/hero';
import SocialMedia from '_components/social-media';
import Accounting from '_components/accounting';
import Accordion from '_components/accordion';

const TYPES = {
  HERO_SECTION: 'hero_section',
  SOCIAL_MEDIA: 'social_media',
  COMPANIES_CAROUSEL: 'companies_carousel',
  ACCOUNTING: 'accounting',
  HEADER: 'header',
  FOOTER: 'footer',
  ACCORDION: 'accordion',
};

export const getSlices = (slice, index) => ({
  [TYPES.HERO_SECTION]: <Hero key={`hero-section-${index}`} slice={slice} />,
  [TYPES.SOCIAL_MEDIA]: (
    <SocialMedia key={`social-media-${index}`} slice={slice} />
  ),
  // [TYPES.COMPANIES_CAROUSEL]: (
  //   <CompaniesCarousel key={`companies-carousel-${index}`} slice={slice} />
  // ),
  [TYPES.ACCOUNTING]: <Accounting key={`accounting-${index}`} slice={slice} />,
  [TYPES.ACCORDION]: <Accordion key={`accordion-${index}`} slice={slice} />,
});
