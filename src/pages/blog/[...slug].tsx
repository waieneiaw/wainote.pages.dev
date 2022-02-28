import Head from 'next/head';
import { MDXRemoteProps } from 'next-mdx-remote';
import { PostPage } from '~self/view/pages';
import { FrontMatter } from '~self/types';
import { MDX_DIR_PATH } from '~self/constants';
import { getFiles, mdx } from '~self/lib';

type BlogPathParameter = {
  params: {
    slug: string[];
  };
};

export const getStaticPaths = () => {
  const files = getFiles(MDX_DIR_PATH);

  const paths: BlogPathParameter[] = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '').split('/'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: BlogPathParameter) => {
  const { frontMatter, mdxSource } = await mdx(params);

  return {
    props: {
      frontMatter,
      slug: params.slug,
      mdxSource,
    },
  };
};

const Page = ({
  frontMatter,
  mdxSource,
}: {
  frontMatter: FrontMatter;
  mdxSource: Omit<MDXRemoteProps, 'components'>;
}) => (
  <>
    <Head>
      <title>{frontMatter.title} | wainote</title>
    </Head>

    <PostPage frontMatter={frontMatter} mdxSource={mdxSource} />
  </>
);

export default Page;
