import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WhyRapsMedia from "@/components/WhyRapsMedia";
import ResultsWall from "@/components/ResultsWall";
import Testimonials from "@/components/Testimonials";
import FeaturedCard from "@/components/FeaturedCard";
import ArticleCard from "@/components/ArticleCard";
import CategoryBlock from "@/components/CategoryBlock";
import RankingsPreview from "@/components/RankingsPreview";
import ArtistGrowthTools from "@/components/ArtistGrowthTools";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import { articles } from "@/lib/data/articles";

export default function Home() {
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 4);
  const latestArticles = articles.slice(0, 12);
  const musicArticles = articles.filter((a) => a.category === "music").slice(0, 5);
  const cultureArticles = articles.filter((a) => a.category === "culture").slice(0, 5);
  const risingStarArticle = articles.find((a) => a.category === "rising-stars" && a.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero + Subscription */}
      <CTASection />

      {/* Why RapsMedia Section */}
      <WhyRapsMedia />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Wall */}
        <ResultsWall />

        {/* Featured Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B0B0F] mb-6">Featured Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArticles.map((article, index) => (
              <FeaturedCard
                key={article.slug}
                article={article}
                risingStar={index === 0 && article.category === "rising-stars"}
              />
            ))}
          </div>
        </section>

        {/* Latest Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0B0B0F] mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>

        {/* Category Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <CategoryBlock
            title="Music"
            articles={musicArticles}
            categorySlug="music"
          />
          <CategoryBlock
            title="Culture"
            articles={cultureArticles}
            categorySlug="culture"
          />
        </div>

        {/* Power Rankings Preview */}
        <div className="mb-16">
          <RankingsPreview />
        </div>

        {/* Artist Growth Tools */}
        <ArtistGrowthTools />

        {/* How It Works */}
        <HowItWorks />

        {/* FAQ */}
        <FAQ />
      </main>

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
}
