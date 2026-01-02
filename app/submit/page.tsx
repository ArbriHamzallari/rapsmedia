"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { promotionPackages } from "@/lib/data/packages";

// Note: Metadata for client components with useSearchParams needs to be in a parent or separate file
function SubmitForm() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package");
  const [formData, setFormData] = useState({
    artistName: "",
    instagram: "",
    email: "",
    songLink: "",
    goal: "",
    package: packageParam || "starter",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="bg-[#AEBBFF] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold text-[#0B0B0F] mb-4">
            Submission Received!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for submitting your music. Our team will review your submission and get back to you within 48 hours.
          </p>
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0B0B0F] mb-4">
            Submit Your Music
          </h1>
          <p className="text-gray-600">
            Get featured on RapsMedia. Fill out the form below and our team will review your submission.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="artistName"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Artist Name *
            </label>
            <input
              type="text"
              id="artistName"
              name="artistName"
              required
              value={formData.artistName}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
              placeholder="Your artist name"
            />
          </div>

          <div>
            <label
              htmlFor="instagram"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Instagram Handle *
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              required
              value={formData.instagram}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
              placeholder="@yourhandle"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="songLink"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Song Link *
            </label>
            <input
              type="url"
              id="songLink"
              name="songLink"
              required
              value={formData.songLink}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
              placeholder="Spotify, Apple Music, YouTube, etc."
            />
          </div>

          <div>
            <label
              htmlFor="coverArt"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Cover Art (Optional)
            </label>
            <input
              type="file"
              id="coverArt"
              name="coverArt"
              accept="image/*"
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            />
          </div>

          <div>
            <label
              htmlFor="goal"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              What's your goal? *
            </label>
            <select
              id="goal"
              name="goal"
              required
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            >
              <option value="">Select a goal</option>
              <option value="streams">Increase Streams</option>
              <option value="followers">Grow Followers</option>
              <option value="collab">Brand Collaboration</option>
              <option value="event">Event Promotion</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="package"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Choose Package *
            </label>
            <select
              id="package"
              name="package"
              required
              value={formData.package}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            >
              {promotionPackages.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} - ${pkg.price}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[#8FA0FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit for Review"}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default function SubmitPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen">
        <Navbar />
        <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="animate-pulse">Loading...</div>
        </main>
        <Footer />
      </div>
    }>
      <SubmitForm />
    </Suspense>
  );
}

