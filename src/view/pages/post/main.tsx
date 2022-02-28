import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import { FrontMatter } from '~self/types';
import { Template } from '../../templates/template';
import { MDXComponents } from '../../components/mdx-components';
import styles from './main.module.scss';

type Props = {
  frontMatter: FrontMatter;
  mdxSource: Omit<MDXRemoteProps, 'components'>;
};

export const PostPage = ({ frontMatter, mdxSource }: Props) => (
  <Template>
    <div className={styles.root}>
      <article className={styles.body}>
        <h1>{frontMatter.title}</h1>
        <MDXRemote {...mdxSource} components={MDXComponents} />
      </article>
    </div>
  </Template>
);
