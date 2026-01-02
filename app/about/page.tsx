import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export const metadata = {
  title: "About RapsMedia — What's Now and What's Next",
  description: "Learn about RapsMedia's mission to highlight rising artists, interviews, and culture in hip-hop.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#0B0B0F] mb-4">About RapsMedia</h1>
          <p className="text-xl text-gray-600">
            What's now and what's next in hip-hop.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0B0F] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              RapsMedia is dedicated to discovering and amplifying the next generation of hip-hop talent. 
              We believe that great music deserves to be heard, regardless of label backing or industry connections.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform combines editorial excellence with innovative promotion tools, giving artists 
              the resources they need to grow their audience and build sustainable careers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0B0F] mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in 2024, RapsMedia emerged from a simple observation: independent hip-hop artists 
              were creating incredible music but struggling to get the visibility they deserved. Traditional 
              media gatekeepers were slow to adapt, and promotion services were either too expensive or 
              ineffective.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We set out to bridge that gap by creating a media platform that truly serves artists. 
              Today, RapsMedia reaches millions of hip-hop fans while helping hundreds of artists build 
              their careers through our editorial features and promotion packages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0B0F] mb-4">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">Editorial Coverage</h3>
                <p className="text-gray-700">
                  In-depth articles, interviews, and features on the artists and trends shaping hip-hop.
                </p>
              </div>
              <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">Artist Promotion</h3>
                <p className="text-gray-700">
                  Comprehensive promotion packages designed to amplify your music and grow your audience.
                </p>
              </div>
              <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">Power Rankings</h3>
                <p className="text-gray-700">
                  Monthly rankings highlighting the top artists making waves in the hip-hop scene.
                </p>
              </div>
              <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#0B0B0F] mb-2">Community Building</h3>
                <p className="text-gray-700">
                  Connecting artists, fans, and industry professionals in a thriving hip-hop community.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-[#0B0B0F] mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Have questions or want to work with us? We'd love to hear from you.
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>General Inquiries:</strong>{" "}
                <a
                  href="mailto:hello@rapsmedia.tv"
                  className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors"
                >
                  hello@rapsmedia.tv
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Promotion & Partnerships:</strong>{" "}
                <a
                  href="mailto:promo@rapsmedia.tv"
                  className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors"
                >
                  promo@rapsmedia.tv
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Editorial Submissions:</strong>{" "}
                <a
                  href="mailto:editorial@rapsmedia.tv"
                  className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors"
                >
                  editorial@rapsmedia.tv
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

