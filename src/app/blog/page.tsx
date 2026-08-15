import BlurFade from "@/components/magicui/blur-fade";
import { allPosts } from "content-collections";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on software development, life, and more.",
  openGraph: {
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "Thoughts on software development, life, and more.",
  },
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage() {
  const sortedPosts = [...allPosts].sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1
  );

  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Blog
          <span className="ml-1 rounded-md border border-border bg-card px-2 py-1 text-sm text-muted-foreground">
            {sortedPosts.length} posts
          </span>
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          My thoughts on software development, life, and more.
        </p>
      </BlurFade>

      {sortedPosts.length > 0 ? (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col gap-5">
            {sortedPosts.map((post, id) => {
              const slug = post._meta.path.replace(/\.mdx$/, "");
              return (
                <BlurFade delay={BLUR_FADE_DELAY * 3 + id * 0.05} key={slug}>
                  <Link
                    className="group flex cursor-pointer items-start gap-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    href={`/blog/${slug}`}
                  >
                    <span className="mt-[5px] font-mono text-xs font-medium tabular-nums">
                      {String(id + 1).padStart(2, "0")}.
                    </span>
                    <div className="flex flex-1 flex-col gap-y-2">
                      <p className="text-lg font-medium tracking-tight">
                        <span className="transition-colors group-hover:text-foreground">
                          {post.title}
                          <ChevronRight
                            className="ml-1 inline-block size-4 -translate-x-2 stroke-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                            aria-hidden
                          />
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">{post.publishedAt}</p>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </BlurFade>
      ) : (
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border px-4 py-12">
            <p className="text-center text-muted-foreground">
              No blog posts yet. Check back soon!
            </p>
          </div>
        </BlurFade>
      )}
    </section>
  );
}
