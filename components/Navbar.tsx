"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { name: "Music", slug: "music" },
  { name: "News", slug: "news" },
  { name: "Interviews", slug: "interviews" },
  { name: "Rising Stars", slug: "rising-stars" },
  { name: "Culture", slug: "culture" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Entertainment", slug: "entertainment" },
  { name: "Sports", slug: "sports" },
  { name: "Power Rankings", slug: "power-rankings" },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/rapsmedia", icon: "📷" },
  { name: "TikTok", url: "https://tiktok.com/@rapsmedia", icon: "🎵" },
  { name: "X/Twitter", url: "https://x.com/rapsmedia", icon: "𝕏" },
  { name: "YouTube", url: "https://youtube.com/@rapsmedia", icon: "▶️" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-[rgba(255,255,255,0.85)] border-b border-[rgba(174,187,255,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/brand/540697956_17944368216043582_7764994228410383827_n.jpg"
              alt="RapsMedia Logo"
              width={40}
              height={40}
              className="rounded"
              priority
            />
            <span className="text-xl font-bold text-[#0B0B0F]">RapsMedia</span>
          </Link>

          {/* Desktop Categories */}
          <div className="hidden lg:flex items-center space-x-1 overflow-x-auto">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="px-3 py-2 text-sm font-medium text-[#0B0B0F] hover:text-[#8FA0FF] transition-colors whitespace-nowrap"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile Categories Scroll */}
          <div className="lg:hidden flex-1 overflow-x-auto mx-4 scrollbar-hide">
            <div className="flex items-center space-x-1">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className="px-3 py-2 text-sm font-medium text-[#0B0B0F] hover:text-[#8FA0FF] transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/submit"
              className="text-sm font-medium text-[#0B0B0F] hover:text-[#8FA0FF] transition-colors"
            >
              Submit
            </Link>
            <Link
              href="/promote"
              className="px-4 py-2 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[#8FA0FF] transition-colors"
            >
              Promote Your Song
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#0B0B0F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[rgba(174,187,255,0.3)]">
            <div className="flex flex-col space-y-2">
              <Link
                href="/submit"
                className="px-4 py-2 text-sm font-medium text-[#0B0B0F] hover:bg-[rgba(174,187,255,0.15)] rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                Submit
              </Link>
              <Link
                href="/promote"
                className="px-4 py-2 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg text-center hover:bg-[#8FA0FF] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Promote Your Song
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

