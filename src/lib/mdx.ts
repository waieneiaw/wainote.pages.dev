import fs from 'fs';
import { MDX_DIR_NAME, MDX_DIR_PATH } from '~self/constants';

import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter';
import path from 'path';

import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

import rehypeToc, { HtmlElementNode } from 'rehype-toc';
import rehypeShiki from '@leafac/rehype-shiki';
import * as shiki from 'shiki';

export const getFiles = (dirPath: string) => {
  const paths: string[] = [];
  const children = fs.readdirSync(dirPath);

  for (const c of children) {
    const _path = `${dirPath}/${c}`;
    const stat = fs.statSync(_path);

    if (stat.isFile()) {
      paths.push(_path);
      continue;
    }

    if (stat.isDirectory()) {
      paths.push(...getFiles(_path));
      continue;
    }
  }

  const rootDirName = MDX_DIR_NAME;
  const result = paths.map((p) => p.replace(`${rootDirName}/`, '')).sort();

  return result;
};

export const mdx = async (params: { slug: string[] }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join(MDX_DIR_PATH, params.slug.join('/') + '.mdx'),
    'utf-8',
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        [
          remarkAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
      rehypePlugins: [
        [
          rehypeToc,
          {
            headings: ['h2', 'h3', 'h4', 'h5', 'h6'],
            cssClasses: {
              toc: 'toc',
              list: 'toc__list',
              listItem: 'toc__item',
              link: 'toc__link',
            },
            customizeTOC: (toc: HtmlElementNode) => {
              const replacer = (children: HtmlElementNode[]) => {
                children.forEach((child) => {
                  if (child.type === 'element' && child.tagName === 'ol') {
                    child.tagName = 'ul';
                  }
                  if (child.children) {
                    replacer(child.children as HtmlElementNode[]);
                  }
                });
              };
              replacer([toc]);
            },
          },
        ],
        [
          rehypeShiki,
          { highlighter: await shiki.getHighlighter({ theme: 'monokai' }) },
        ],
      ],
    },
  });

  return {
    frontMatter,
    content,
    mdxSource,
  };
};
