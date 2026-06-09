export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  published: boolean;
  content: string;
};

export function getAllPosts(): BlogPost[] {
  return [];
}

export function getPostBySlug(slug: string): BlogPost | null {
  throw new Error(`Not implemented: ${slug}`);
}
