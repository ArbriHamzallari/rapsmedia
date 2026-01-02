import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Music", slug: "music" },
  { name: "News", slug: "news" },
  { name: "Interviews", slug: "interviews" },
  { name: "Rising Stars", slug: "rising-stars" },
  { name: "Culture", slug: "culture" },
  { name: "Lifestyle", slug: "lifestyle" },
  { name: "Entertainment", slug: "entertainment" },
  { name: "Sports", slug: "sports" },
];

const socialLinks = [
  { name: "Instagram", url: "https://instagram.com/rapsmedia", icon: "📷" },
  { name: "TikTok", url: "https://tiktok.com/@rapsmedia", icon: "🎵" },
  { name: "X/Twitter", url: "https://x.com/rapsmedia", icon: "𝕏" },
  { name: "YouTube", url: "https://youtube.com/@rapsmedia", icon: "▶️" },
];

export default function Footer() {
  return (
    <footer className="bg-[#111118] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/brand/540697956_17944368216043582_7764994228410383827_n.jpg"
                alt="RapsMedia Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-lg font-bold">RapsMedia</span>
            </div>
            <p className="text-gray-400 text-sm">
              RapsMedia — what's now and what's next.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                  aria-label={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/promote"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                >
                  Promote
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                >
                  Submit
                </Link>
              </li>
              <li>
                <Link
                  href="/power-rankings"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                >
                  Power Rankings
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/${category.slug}`}
                    className="text-gray-400 hover:text-[#AEBBFF] transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Business Inquiries</h3>
            <p className="text-gray-400 text-sm mb-4">
              For partnerships and promotions:
            </p>
            <a
              href="mailto:promo@rapsmedia.tv"
              className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors text-sm"
            >
              promo@rapsmedia.tv
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} RapsMedia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

