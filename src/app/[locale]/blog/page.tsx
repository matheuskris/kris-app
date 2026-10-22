import Link from "next/link";
import { notFound } from "next/navigation";
import { PostCard } from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/content/blog";
import { isLocale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const posts = getAllPosts();
  const { pages } = getSiteConfig(locale);

  return (
    <main className="min-h-screen bg-canvas pt-16">
      <section className="page-shell py-20">
        <h1 className="text-headline-xl text-on-surface">{pages.blog.title}</h1>
        <p className="text-body-lg mt-4 max-w-2xl text-on-surface-variant">
          {pages.blog.subtitle}
        </p>
      </section>
      <section className="page-shell pb-20">
        {posts.length === 0 ? (
          <div className="max-w-xl">
            <h2 className="text-headline-sm text-on-surface">{pages.blog.emptyTitle}</h2>
            <p className="text-body-md mt-2 text-on-surface-variant">
              {pages.blog.emptyBody}
            </p>
            <Link
              href={localizeHref(locale, "/#projects")}
              className="text-label-md mt-6 inline-flex text-primary underline decoration-primary/30 underline-offset-4"
            >
              {pages.blog.back}
            </Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} locale={locale} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
