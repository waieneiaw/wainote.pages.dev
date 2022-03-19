/* eslint-disable @typescript-eslint/naming-convention */

import React from 'react';

const A = ({
  href,
  children,
  target,
  rel,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  if (href?.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} target={target} rel={rel} {...props}>
      {children}
    </a>
  );
};

const Img = ({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={src} alt={alt} {...props} />
);

export const MDXComponents = {
  a: A,
  img: Img,
};
