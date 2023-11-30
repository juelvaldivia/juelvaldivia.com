import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaMastodon,
  FaMedium,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

type IconProps = {
  classStyle: string;
};

export const LinkedIn = (props: IconProps) => (
  <FaLinkedinIn className={props.classStyle} />
);
export const Github = (props: IconProps) => (
  <FaGithub className={props.classStyle} />
);
export const Twitter = (props: IconProps) => (
  <FaTwitter className={props.classStyle} />
);
export const Mastodon = (props: IconProps) => (
  <FaMastodon className={props.classStyle} />
);
export const Medium = (props: IconProps) => (
  <FaMedium className={props.classStyle} />
);
export const Youtube = (props: IconProps) => (
  <FaYoutube className={props.classStyle} />
);
export const Instagram = (props: IconProps) => (
  <FaInstagram className={props.classStyle} />
);
export const Buymeacoffee = (props: IconProps) => (
  <SiBuymeacoffee className={props.classStyle} />
);
