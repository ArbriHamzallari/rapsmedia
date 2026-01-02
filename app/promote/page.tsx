import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import TrustAndTransparency from "@/components/TrustAndTransparency";
import ResultsPreview from "@/components/ResultsPreview";
import Link from "next/link";
import { promotionPackages, addOns } from "@/lib/data/packages";

export const metadata: Metadata = {
  title: "Promote Your Music | RapsMedia",
  description: "Get your music in front of the right audience. Choose a promotion package that fits your goals.",
};

export default function PromotePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 1. Hero + CTA */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#0B0B0F] mb-4">
            Promote Your Music
          </h1>
          <p className="text-xl text-[#4A4A5C] max-w-2xl mx-auto mb-8">
            Get your music in front of the right audience. Choose a promotion package that fits your goals.
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors shadow-[0_4px_12px_rgba(11,11,15,0.2)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.3)]"
          >
            Start Your Promotion
          </Link>
        </div>

        {/* 2. Results Preview */}
        <ResultsPreview />

        {/* 3. Testimonials Preview */}
        <Testimonials limit={6} />

        {/* 4. Packages */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0F] mb-4">
              Promotion Packages
            </h2>
            <p className="text-lg text-[#4A4A5C] max-w-2xl mx-auto">
              Choose the package that aligns with your goals. Growth and Pro packages include a results snapshot with key metrics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotionPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative bg-[rgba(255,255,255,0.75)] backdrop-blur-sm rounded-lg border p-8 ${
                  pkg.popular
                    ? "border-[rgba(174,187,255,0.5)] shadow-[0_4px_16px_rgba(174,187,255,0.25)]"
                    : "border-[rgba(174,187,255,0.3)]"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#AEBBFF] text-[#0B0B0F] px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-[#0B0B0F] mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#0B0B0F]">
                    €{pkg.price}
                  </span>
                  <span className="text-[#4A4A5C]">/promotion</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-[#AEBBFF] mt-1">✓</span>
                      <span className="text-[#4A4A5C]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/submit?package=${pkg.id}`}
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? "bg-[#AEBBFF] text-[#0B0B0F] hover:bg-[#8FA0FF]"
                      : "bg-[#0B0B0F] text-white hover:bg-[#111118]"
                  }`}
                >
                  Start Promotion
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Add-ons */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0F] mb-4">
              Add-Ons
            </h2>
            <p className="text-lg text-[#4A4A5C] max-w-2xl mx-auto">
              Enhance your promotion with additional services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon) => (
              <div
                key={addon.id}
                className="bg-[rgba(255,255,255,0.75)] backdrop-blur-sm border border-[rgba(174,187,255,0.3)] rounded-lg p-6 hover:border-[rgba(174,187,255,0.5)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.15)] transition-all"
              >
                <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">
                  {addon.name}
                </h3>
                <div className="text-2xl font-bold text-[#0B0B0F] mb-3">
                  €{addon.price}
                </div>
                <p className="text-[#4A4A5C] text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Trust & Transparency */}
        <TrustAndTransparency />

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Final CTA Banner */}
        <div className="bg-[rgba(174,187,255,0.3)] backdrop-blur-sm rounded-lg border-2 border-[rgba(174,187,255,0.5)] p-12 text-center shadow-[0_4px_16px_rgba(174,187,255,0.2)]">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0B0F] mb-4">
            Ready to Grow Your Music?
          </h2>
          <p className="text-lg text-[#4A4A5C] mb-8 max-w-2xl mx-auto">
            Submit your track and start your promotion today. Get real results with transparent reporting.
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-4 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors shadow-[0_4px_12px_rgba(11,11,15,0.2)] hover:shadow-[0_6px_20px_rgba(11,11,15,0.3)]"
          >
            Submit Your Track
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
