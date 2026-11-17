export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
          About the Engineer
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
          I am a Full-Stack Software Engineer mastering Next.js 15+ App Router
          from first principles. This blog is built to demonstrate clean code,
          modular architecture, server-first rendering, and production-grade UI.
        </p>
      </div>

      {/* Tech Stack Highlights */}
      <section className="mt-12">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
          Core Competencies
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js 15+ (App Router)",
            "React 19 Server Components",
            "TypeScript",
            "Tailwind CSS v4",
            "Nested Layout Architecture",
            "Client & Server Composition",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs font-medium text-zinc-800 shadow-xs dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="mt-12 rounded-xl border border-zinc-200 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
          The Engineering Philosophy
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          Rather than relying on quick copy-paste solutions, every concept in this
          project is built to understand how Next.js works under the hood — how
          routes are resolved, why layouts persist without remounting, and how
          templates reset client state on navigation.
        </p>
      </section>
    </main>
  );
}
