import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ComingSoonProps {
  title: string;
  description: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="bg-[#AEBBFF] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <span className="text-5xl">🚀</span>
        </div>
        <h1 className="text-4xl font-bold text-[#0B0B0F] mb-4">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{description}</p>
        <a
          href="/"
          className="inline-block px-8 py-3 bg-[#0B0B0F] text-white font-semibold rounded-lg hover:bg-[#111118] transition-colors"
        >
          Back to Home
        </a>
      </main>
      <Footer />
    </div>
  );
}

