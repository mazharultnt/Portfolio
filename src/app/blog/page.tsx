import type { Metadata } from "next";
import { posts, postCategories } from "@/data/posts";
import BlogExplorer from "@/components/BlogExplorer";
import ImageSlot from "@/components/ImageSlot";
import { PageHero } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical articles on HTML, CSS, JavaScript, React, Tailwind, Git, SEO and responsive design, written by front-end developer Mazharul Islam.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Notes from <span className="gradient-text">my learning</span></>}
        text={`${posts.length} practical articles on front-end development, written in plain words. Click any card to read the full article.`}
      />

      <section className="section tight-top">
        <div className="container">
          <ImageSlot file="blog-header-banner.jpg" className="blog-banner" label="blog-header-banner.jpg" />
          <BlogExplorer posts={posts} categories={postCategories} />
        </div>
      </section>
    </>
  );
}
