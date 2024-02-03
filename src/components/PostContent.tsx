import type { IFrontmatter } from 'astro-boilerplate-components';
import type { ReactNode } from 'react';

type IPostContentProps = {
  content: IFrontmatter;
  children: ReactNode;
};

const PostContent = (props: IPostContentProps) => (
  <article className="mx-auto mt-5 max-w-prose">
    <section className="aspect-h-2 aspect-w-3">
      <img
        className="h-full w-full object-center"
        src={props.content.imgSrc}
        alt={props.content.imgAlt}
        loading="lazy"
      />
    </section>
    <section className="prose prose-invert mt-8 prose-img:rounded-lg">
      {props.children}
    </section>
  </article>
);

export { PostContent };
