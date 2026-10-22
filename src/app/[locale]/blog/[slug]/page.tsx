import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/content/blog";
import { isLocale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import { getSiteConfig } from "@/lib/content/site";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { chrome } = getSiteConfig(locale);

  return (
    <main className="min-h-screen bg-canvas pt-16">
      <article className="page-shell max-w-3xl py-16">
        <p className="text-label-sm text-primary">{post.date}</p>
        <h1 className="text-headline-xl mt-3 text-on-surface">{post.title}</h1>
        <p className="text-body-lg mt-4 text-on-surface-variant">{post.description}</p>
        <div className="prose-invert text-body-md mt-8 whitespace-pre-wrap text-on-surface">
          {post.content}
        </div>
        <Link
          href={localizeHref(locale, "/blog")}
          className="text-code-md mt-10 inline-flex items-center gap-2 text-primary"
        >
          <span className="material-symbols-outlined text-[16px]">
            arrow_back
          </span>
          {chrome.allNotes}
        </Link>
      </article>
    </main>
  );
}
