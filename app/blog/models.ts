export interface BlogPost {
    slug: string | null;
    title: string;
    summary: string;
    content: string;
    tags: string | null;
    createdAt: Date;
    updatedAt?: Date | null;
}

export interface BlogPostRequestDto {
  slug: string | null;
  title: string;
  summary: string;
  content: string;
  tags: string | null;
}
