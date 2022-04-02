import React from 'react';

import Hero from '_components/hero';

const TYPES = {
  HERO_SECTION: 'hero_section',
  SOCIAL_MEDIA: 'social_media',
  COMPANIES_CAROUSEL: 'companies_carousel',
  ACCOUNTING: 'accounting',
  HEADER: 'header',
  FOOTER: 'footer',
};

export const getSlices = (slice, index) => ({
  [TYPES.HERO_SECTION]: <Hero key={`hero-section-${index}`} slice={slice} />,
  // [TYPES.SOCIAL_MEDIA]: (
  //   <SocialMedia key={`social-media-${index}`} slice={slice} />
  // ),
  // [TYPES.COMPANIES_CAROUSEL]: (
  //   <CompaniesCarousel key={`companies-carousel-${index}`} slice={slice} />
  // ),
  // [TYPES.ACCOUNTING]: <Accounting key={`accounting-${index}`} slice={slice} />,
});
