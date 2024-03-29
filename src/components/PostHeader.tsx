import type { IFrontmatter } from 'astro-boilerplate-components';
import { format } from 'date-fns';

type IPostHeaderProps = {
  content: IFrontmatter;
  author: string;
};

const PostHeader = (props: IPostHeaderProps) => (
  <header>
    <h1 className="text-center text-3xl font-bold">{props.content.title}</h1>

    <section className="mt-2 text-center text-sm text-gray-400">
      Por {props.author} |{' '}
      {format(new Date(props.content.pubDate), 'LLL d, yyyy')}
    </section>
  </header>
);

export { PostHeader };
