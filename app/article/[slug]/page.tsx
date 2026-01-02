import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/lib/data/articles";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    return {
      title: "Article Not Found | RapsMedia",
    };
  }

  return {
    title: `${article.title} | RapsMedia`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.coverImage],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  const categoryColors: Record<string, string> = {
    music: "bg-[#AEBBFF]",
    news: "bg-[#8FA0FF]",
    interviews: "bg-[#AEBBFF]",
    "rising-stars": "bg-[#AEBBFF]",
    culture: "bg-[#8FA0FF]",
    lifestyle: "bg-[#AEBBFF]",
    entertainment: "bg-[#8FA0FF]",
    sports: "bg-[#AEBBFF]",
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Image */}
        <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-gray-200">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span
              className={`px-3 py-1 text-sm font-semibold text-[#0B0B0F] rounded ${
                categoryColors[article.category] || "bg-[#AEBBFF]"
              }`}
            >
              {article.category.replace("-", " ").toUpperCase()}
            </span>
            {article.trending && (
              <span className="px-3 py-1 text-sm font-semibold bg-[#AEBBFF] text-[#0B0B0F] rounded">
                🔥 Trending
              </span>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-[#4A4A5C]">
            <span className="font-semibold">{article.author}</span>
            <span>•</span>
            <span>{new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.contentSections.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold text-[#0B0B0F] mt-8 mb-4"
                  >
                    {section.content || ""}
                  </h2>
                );
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="text-[#0B0B0F]/90 leading-relaxed mb-4"
                  >
                    {section.content || ""}
                  </p>
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="border-l-4 border-[#AEBBFF] pl-4 italic text-[#0B0B0F]/90 my-6"
                  >
                    "{section.content || ""}"
                  </blockquote>
                );
              case "instagram":
                return (
                  <div
                    key={index}
                    className="my-8 p-8 bg-[#AEBBFF]/10 rounded-lg border-2 border-[#AEBBFF] text-center"
                  >
                    <p className="text-[#4A4A5C] mb-2">📷 Instagram Post</p>
                    <p className="text-sm text-[#4A4A5C]">
                      {section.instagramUrl || "Embedded Instagram content"}
                    </p>
                  </div>
                );
              case "image":
                return section.imageUrl ? (
                  <div key={index} className="my-8">
                    <Image
                      src={section.imageUrl}
                      alt=""
                      width={800}
                      height={600}
                      className="rounded-lg"
                    />
                  </div>
                ) : null;
              default:
                return null;
            }
          })}
        </div>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Read Next */}
        {relatedArticles.length > 0 && (
                  <section className="border-t border-[rgba(174,187,255,0.3)] pt-12">
            <h2 className="text-2xl font-bold text-[#0B0B0F] mb-6">Read Next</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <ArticleCard key={related.slug} article={related} />
              ))}
            </div>
          </section>
        )}
      </article>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

