import { AppConfig } from '@/utils/AppConfig';

import { FooterCopyright, Section } from '../components';

const Footer = () => (
  <Section>
    <FooterCopyright siteName={AppConfig.siteName} />
  </Section>
);

export { Footer };
