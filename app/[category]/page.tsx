import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import FeaturedCard from "@/components/FeaturedCard";
import { articles } from "@/lib/data/articles";
import { Category } from "@/lib/types";

const categoryNames: Record<string, string> = {
  music: "Music",
  news: "News",
  interviews: "Interviews",
  "rising-stars": "Rising Stars",
  culture: "Culture",
  lifestyle: "Lifestyle",
  entertainment: "Entertainment",
  sports: "Sports",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;
  const categoryName = categoryNames[category] || "Category";

  return {
    title: `${categoryName} | RapsMedia`,
    description: `Explore ${categoryName.toLowerCase()} articles and features on RapsMedia.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const resolvedParams = await params;
  const category = resolvedParams.category as Category;

  if (!categoryNames[category]) {
    notFound();
  }

  const categoryArticles = articles.filter((a) => a.category === category);
  const featured = categoryArticles.find((a) => a.featured);
  const otherArticles = categoryArticles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0B0B0F] mb-2">
            {categoryNames[category]}
          </h1>
          <p className="text-gray-600">
            {categoryArticles.length} articles
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg whitespace-nowrap">
            Newest
          </button>
          <button className="px-4 py-2 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm border border-[rgba(174,187,255,0.3)] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[rgba(255,255,255,0.9)] whitespace-nowrap">
            Trending
          </button>
          <button className="px-4 py-2 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm border border-[rgba(174,187,255,0.3)] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[rgba(255,255,255,0.9)] whitespace-nowrap">
            Most Viewed
          </button>
        </div>

        {/* Featured Story */}
        {featured && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0B0B0F] mb-6">Featured Story</h2>
            <FeaturedCard article={featured} />
          </div>
        )}

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(categoryNames).map((category) => ({
    category,
  }));
}

