import React from 'react';
import { LinkTo } from '../link-to';
import styles from './main.module.scss';

const endLength = 100;

type Props = PropsWithClass & {
  href: string;
  title: string;
  date: string;
  tags: string[];
  content: string;
};

export const BlogCard = ({
  className,
  href,
  title,
  date,
  tags,
  content,
}: Props) => (
  <section className={`${styles.root} ${className || ''}`}>
    <h2>
      <LinkTo href={href}>{title}</LinkTo>
    </h2>
    <span className={styles.summary}>
      {content.length > endLength
        ? `${content.substring(0, endLength)}...`
        : content}
    </span>
    <section className={styles.info}>
      <span>{date}</span>
      <span className={styles.separator} />
      {tags.map((tag, index) => (
        <span key={`${href}-${index}-${tag}`} className={styles.tag}>
          {tag}
        </span>
      ))}
    </section>
  </section>
);
