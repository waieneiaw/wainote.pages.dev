/*
  eslint-disable
    @typescript-eslint/ban-types
 */

type Children = React.ReactNode;
type EmptyProps = {};
type PropsWithChildren<P = {}> = P & { children?: Children };
type PropsWithClass<P = {}> = P & { className?: string };
type PropsWithFull<P = {}> = P & PropsWithChildren<PropsWithClass>;

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>;
  export default content;
}

declare module '*.jpg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}

declare module '*.png' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
