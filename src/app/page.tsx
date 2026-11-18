import Link from "next/link";
import { POSTS } from "@/data/posts";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-600 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
        <span className="flex h-2 w-2 rounded-full bg-blue-600" />
        Next.js 15+ App Router Architecture
      </div>

      <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        Architecting Modern Web Apps with Precision.
      </h1>

      <p className="mt-6 text-lg leading-8 text-zinc-600 max-w-2xl dark:text-zinc-400">
        Welcome to DevPulse. Here, I break down Next.js internals, from App
        Router layouts and server rendering to full-stack production patterns.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/blog"
          className="rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Explore Articles →
        </Link>
        <Link
          href="/about"
          className="rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-xs transition hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
        >
          About the Author
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            100%
          </div>
          <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            App Router Native
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Built using modern server components, layouts, and templates.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Zero
          </div>
          <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Layout Flashes
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            State-preserving persistent navigation across all routes.
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-xs dark:border-zinc-800/80 dark:bg-zinc-900">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Tailwind v4
          </div>
          <div className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Clean Design System
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Crisp typography, frosted glass header, and responsive layout.
          </p>
        </div>
      </div>

      <section className="mt-16">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Featured Articles
          </h2>
          <Link
            href="/blog"
            className="text-xs font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            View all →
          </Link>
        </div>

        <div className="mt-6 divide-y divide-zinc-200 dark:divide-zinc-800">
          {POSTS.map((post) => (
            <article key={post.slug} className="py-6 group">
              <div className="flex items-center gap-3 text-xs text-zinc-500">
                <span className="font-medium text-blue-600 dark:text-blue-400">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.publishedAt}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors dark:text-zinc-100 dark:group-hover:text-blue-400">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
