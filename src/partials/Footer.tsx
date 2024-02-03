import { FooterCopyright } from '@/components';
import { AppConfig } from '@/utils/AppConfig';

const Footer = () => <FooterCopyright siteName={AppConfig.siteName} />;

export { Footer };
