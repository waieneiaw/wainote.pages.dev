/* eslint-disable @typescript-eslint/naming-convention */

const Img = ({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={src} alt={alt} {...props} />
);

export const MDXComponents = {
  img: Img,
};
