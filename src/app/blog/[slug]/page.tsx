type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Post: {slug} — placeholder</h1>
    </main>
  );
}
