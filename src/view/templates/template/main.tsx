import * as React from 'react';
import { LinkTo } from '../../components/link-to';
import styles from './main.module.scss';

type Props = PropsWithChildren;

const Logo = () => (
  <LinkTo className={styles.logo} href="/">
    */wainote/*
  </LinkTo>
);

export const Template = ({ children }: Props) => (
  <div className={styles.root}>
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
    </header>
    <main className={styles.content}>{children}</main>
    <footer className={styles.footer}>
      <section className={styles.author}>
        <section className={styles.sns}>
          <LinkTo href="https://github.com/waieneiaw" aria-label="GitHub">
            <div className={`${styles.hiddenSpan} ${styles.github}`}>
              <span>GitHub</span>
            </div>
          </LinkTo>
          <LinkTo href="https://twitter.com/waieneiaw" aria-label="Twitter">
            <div className={`${styles.hiddenSpan} ${styles.twitter}`}>
              <span>Twitter</span>
            </div>
          </LinkTo>
        </section>
        <section className={styles.copyright}>
          <span>&copy; 2022 waine.</span>
        </section>
      </section>
    </footer>
  </div>
);
