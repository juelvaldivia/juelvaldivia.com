import { Github, LinkedIn, Mastodon, Twitter, Youtube } from './Icons';

const Social = (
  <>
    <a href="https://mastodon.social/@juelvaldivia" target="_blank">
      <Mastodon classStyle="h-9 w-9 hover:translate-y-1" />
    </a>
    <a href="https://github.com/juelvaldivia" target="_blank">
      <Github classStyle="h-9 w-9 hover:translate-y-1" />
    </a>
    <a href="https://twitter.com/juelvaldivia" target="_blank">
      <Twitter classStyle="h-9 w-9 hover:translate-y-1" />
    </a>
    <a href="https://www.linkedin.com/in/juelvaldivia" target="_blank">
      <LinkedIn classStyle="h-9 w-9 hover:translate-y-1" />
    </a>
    <a href="https://www.youtube.com/@juelvaldivia" target="_blank">
      <Youtube classStyle="h-9 w-9 hover:translate-y-1" />
    </a>
  </>
);

export { Social };
