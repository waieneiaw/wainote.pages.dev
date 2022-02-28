import { PostData } from '~self/types';
import { BlogCard } from '../../components/blog-card';
import { Template } from '../../templates/template';
import styles from './main.module.scss';

const blogPathRoot = '/blog';

type Props = {
  posts: PostData[];
};

export const HomePage = ({ posts }: Props) => (
  <Template>
    <div className={styles.root}>
      <div className={styles.articlesContainer}>
        {posts.map((post, index) => (
          <BlogCard
            key={`${index}-${post.frontMatter.title}`}
            className={styles.card}
            href={`${blogPathRoot}/` + post.slug}
            date={post.frontMatter.date}
            tags={post.frontMatter.tags}
            title={post.frontMatter.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  </Template>
);
