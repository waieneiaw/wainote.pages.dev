export type FrontMatter = {
  title: string;
  date: string;
  thumbnailUrl: string;
  tags: string[];
  draft: boolean;
  published: boolean;
  updatedAt: string;
};

export type PostData = {
  slug: string;
  frontMatter: FrontMatter;
  content: string;
};
