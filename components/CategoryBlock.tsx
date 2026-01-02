import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface CategoryBlockProps {
  title: string;
  articles: Article[];
  categorySlug: string;
}

export default function CategoryBlock({ title, articles, categorySlug }: CategoryBlockProps) {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0B0B0F]">{title}</h2>
        <Link
          href={`/${categorySlug}`}
          className="text-sm font-semibold text-[#8FA0FF] hover:text-[#AEBBFF] transition-colors"
        >
          View All →
        </Link>
      </div>
      <div className="space-y-4">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/article/${article.slug}`}
            className="group flex gap-4 p-4 bg-[rgba(255,255,255,0.75)] backdrop-blur-sm rounded-lg border border-[rgba(174,187,255,0.2)] hover:bg-[rgba(255,255,255,0.9)] hover:border-[rgba(174,187,255,0.4)] transition-all"
          >
            <div className="relative w-24 h-24 flex-shrink-0 rounded overflow-hidden bg-gray-200">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="96px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-[#8FA0FF] mb-1 uppercase">
                {article.category.replace("-", " ")}
              </div>
              <h3 className="font-bold text-lg text-[#0B0B0F] mb-1 group-hover:text-[#8FA0FF] transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-sm text-[#4A4A5C] line-clamp-2 mb-2">{article.excerpt}</p>
              <div className="flex items-center gap-2 text-xs text-[#4A4A5C]">
                <span>{article.author}</span>
                <span>•</span>
                <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

