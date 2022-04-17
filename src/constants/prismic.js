import React from 'react';

import Hero from '_components/hero';
import SocialMedia from '_components/social-media';
import Accounting from '_components/accounting';
import Accordion from '_components/accordion';
import NewsSection from '_components/news-section';
import Post from '_views/post';
import TextAndImage from '_components/text-and-image';
import Identity from '_components/identity';
import Goals from '_components/goals';
import TextSection from '_components/text-section';
import DoubleTextSection from '_components/double-text-section';
import MultipleDownloadLinks from '_components/multiple-download-links';

const TYPES = {
  HERO_SECTION: 'hero_section',
  SOCIAL_MEDIA: 'social_media',
  COMPANIES_CAROUSEL: 'companies_carousel',
  ACCOUNTING: 'accounting',
  HEADER: 'header',
  FOOTER: 'footer',
  ACCORDION: 'accordion',
  NEWS_SECTION: 'news_section',
  POST: 'post',
  TEXT_AND_IMAGE: 'text_and_image',
  TEXT: 'text',
  DOUBLE_TEXT: 'double_text',
  MULTIPLE_DOWNLOADS_LINKS: 'multiple_download_links',
  IDENTITY: 'identity',
  GOALS: 'goals',
};

export const getSlices = (slice, index) => ({
  [TYPES.HERO_SECTION]: <Hero key={`hero-section-${index}`} slice={slice} />,
  [TYPES.SOCIAL_MEDIA]: (
    <SocialMedia key={`social-media-${index}`} slice={slice} />
  ),
  [TYPES.ACCOUNTING]: <Accounting key={`accounting-${index}`} slice={slice} />,
  [TYPES.ACCORDION]: <Accordion key={`accordion-${index}`} slice={slice} />,
  [TYPES.POST]: <Post key={`news-${index}`} slice={slice} />,
  [TYPES.NEWS_SECTION]: (
    <NewsSection key={`news-section-${index}`} slice={slice} />
  ),
  [TYPES.TEXT_AND_IMAGE]: (
    <TextAndImage key={`text-and-image-${index}`} slice={slice} />
  ),
  [TYPES.IDENTITY]: <Identity key={`identity-${index}`} slice={slice} />,
  [TYPES.GOALS]: <Goals key={`goals-${index}`} slice={slice} />,
  [TYPES.TEXT]: <TextSection key={`text-section-${index}`} slice={slice} />,
  [TYPES.DOUBLE_TEXT]: (
    <DoubleTextSection key={`double-text-section-${index}`} slice={slice} />
  ),
  [TYPES.MULTIPLE_DOWNLOADS_LINKS]: (
    <MultipleDownloadLinks
      key={`multiple-download-links-${index}`}
      slice={slice}
    />
  ),
});
