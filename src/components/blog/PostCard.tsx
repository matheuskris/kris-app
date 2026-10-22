import Link from "next/link";
import type { Locale } from "@/lib/i18n/locales";
import { localizeHref } from "@/lib/i18n/paths";
import type { BlogPost } from "@/lib/content/blog";

export function PostCard({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  return (
    <article className="panel p-6">
      <p className="text-label-sm text-primary">{post.date}</p>
      <h2 className="text-headline-sm mt-2 text-on-surface">
        <Link href={localizeHref(locale, `/blog/${post.slug}`)} className="hover:text-primary">
          {post.title}
        </Link>
      </h2>
      <p className="text-body-md mt-2 text-on-surface-variant">{post.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="text-code-sm rounded border border-outline-variant/40 px-2 py-0.5 text-on-surface-variant"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
