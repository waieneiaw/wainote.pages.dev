import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FrontMatter, PostData } from '~self/types';
import { getFiles } from '~self/lib';
import { ENV, MDX_DIR_PATH } from '~self/constants';
import { HomePage } from '~self/view/pages';
import Head from 'next/head';

export const getStaticProps = () => {
  const files = getFiles(MDX_DIR_PATH);

  const posts: PostData[] = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join(MDX_DIR_PATH, filename),
        'utf-8',
      );
      const { data, content } = matter(markdownWithMeta);

      return {
        frontMatter: { ...(data as FrontMatter) },
        slug: filename.split('.')[0],
        content: content
          .replaceAll(/#+? /gi, '')
          .replaceAll('\n', '')
          .replaceAll(/```.*```/gi, '')
          .replaceAll(/!\[.*](.*)/gi, ''),
      };
    })
    .filter(
      ({ frontMatter }) => (ENV.isDevelopment ? true : !frontMatter.draft),
      // !frontMatter.draft
    )
    .filter(
      ({ frontMatter }) => (ENV.isDevelopment ? true : frontMatter.published),
      // frontMatter.published,
    )
    .sort((a, b) => {
      const adate = a.frontMatter.date;
      const bdate = b.frontMatter.date;

      if (adate < bdate) return 1;
      if (adate > bdate) return -1;

      return 0;
    });

  return {
    props: {
      posts,
    },
  };
};

type Props = {
  posts: PostData[];
};

const Page = ({ posts }: Props) => (
  <>
    <Head>
      <title>wainote</title>
    </Head>

    <HomePage posts={posts} />
  </>
);

export default Page;
