import { FooterCopyright, Section } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright siteName={AppConfig.siteName} />
  </Section>
);

export { Footer };
