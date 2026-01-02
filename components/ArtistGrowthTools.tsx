import Link from "next/link";

const tools = [
  {
    title: "Submit for Spotlight",
    description: "Get featured in our Rising Stars section and reach new audiences.",
    link: "/submit",
    icon: "⭐",
  },
  {
    title: "Promotion Packages",
    description: "Amplify your music with our proven promotion strategies.",
    link: "/promote",
    icon: "🚀",
  },
  {
    title: "Verified Collabs",
    description: "Connect with verified artists and industry professionals.",
    link: "/about",
    icon: "✓",
  },
];

export default function ArtistGrowthTools() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-[#0B0B0F] mb-8 text-center">
        Artist Growth Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            href={tool.link}
            className="group bg-[rgba(255,255,255,0.85)] backdrop-blur-sm p-6 rounded-lg border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(174,187,255,0.5)]"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-xl font-bold text-[#0B0B0F] mb-2 group-hover:text-[#8FA0FF] transition-colors">
              {tool.title}
            </h3>
            <p className="text-[#4A4A5C]">{tool.description}</p>
            <div className="mt-4 text-sm font-semibold text-[#8FA0FF] group-hover:text-[#AEBBFF] transition-colors">
              Learn More →
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

