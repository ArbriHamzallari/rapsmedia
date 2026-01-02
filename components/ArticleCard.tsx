import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
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
    <Link
      href={`/article/${article.slug}`}
      className="group block bg-[rgba(255,255,255,0.85)] backdrop-blur-sm rounded-lg overflow-hidden border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.25)] transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-200">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {article.featured && (
          <div className="absolute top-2 left-2 bg-[#111118] text-white px-2 py-1 text-xs font-semibold rounded backdrop-blur-sm">
            Featured
          </div>
        )}
        {article.trending && (
          <div className="absolute top-2 right-2 bg-[#AEBBFF] text-[#0B0B0F] px-2 py-1 text-xs font-semibold rounded backdrop-blur-sm">
            🔥 Trending
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`px-2 py-1 text-xs font-semibold text-[#0B0B0F] rounded ${
              categoryColors[article.category] || "bg-[#AEBBFF]"
            }`}
          >
            {article.category.replace("-", " ").toUpperCase()}
          </span>
          {article.readTime && (
            <span className="text-xs text-[#4A4A5C]">{article.readTime} min read</span>
          )}
        </div>
        <h3 className="font-bold text-lg text-[#0B0B0F] mb-2 group-hover:text-[#8FA0FF] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-[#4A4A5C] line-clamp-2 mb-3">{article.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-[#4A4A5C]">
          <span>{article.author}</span>
          <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
        </div>
      </div>
    </Link>
  );
}

