import Link from "next/link";
import Image from "next/image";
import { Article } from "@/lib/types";

interface FeaturedCardProps {
  article: Article;
  risingStar?: boolean;
}

export default function FeaturedCard({ article, risingStar = false }: FeaturedCardProps) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group relative block aspect-[4/3] overflow-hidden rounded-lg bg-gray-200"
    >
      <Image
        src={article.coverImage}
        alt={article.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {risingStar && (
          <div className="mb-2 inline-block bg-[#AEBBFF] text-[#0B0B0F] px-3 py-1 text-xs font-bold rounded-full">
            ⭐ RISING STAR
          </div>
        )}
        <div className="mb-2 text-sm font-semibold text-[#AEBBFF] uppercase tracking-wide">
          {article.category.replace("-", " ")}
        </div>
        <h2 className="text-2xl font-bold mb-2 group-hover:text-[#AEBBFF] transition-colors line-clamp-2">
          {article.title}
        </h2>
        <p className="text-sm text-gray-300 line-clamp-2">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
          <span>{article.author}</span>
          <span>•</span>
          <span>{new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
        </div>
      </div>
    </Link>
  );
}

