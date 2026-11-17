import Link from "next/link";
import { POSTS } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      {/* Page Header */}
      <div className="border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
          Technical Articles & Guides
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          All Blog Posts
        </h1>
        <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
          In-depth breakdowns of modern Next.js 15+ architectural patterns, server
          components, and production workflows.
        </p>
      </div>

      {/* Post List */}
      <div className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
        {POSTS.map((post) => (
          <article key={post.slug} className="py-8 group">
            <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500">
              <span className="rounded-md bg-blue-50 px-2.5 py-1 font-semibold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                {post.category}
              </span>
              <span>•</span>
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="mt-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {post.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800/70 dark:text-zinc-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
