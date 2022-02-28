import React from 'react';
import Link, { LinkProps } from 'next/link';

type Props = Omit<LinkProps, 'passHref'> & PropsWithFull;

export const LinkTo = ({ className, children, ...props }: Props) => {
  return (
    <Link passHref {...props}>
      <a href="___replace___" className={className}>
        {children}
      </a>
    </Link>
  );
};
