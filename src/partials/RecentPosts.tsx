import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import { BlogGallery } from 'astro-boilerplate-components';

import { GradientText, Section } from '@/components';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
  totalPosts: number;
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Publicaciones <GradientText>Recientes</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts/">Todas las publicaciones({props.totalPosts}) →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
