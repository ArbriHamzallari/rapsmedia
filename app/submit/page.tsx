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
    instagramHandle: "",
    email: "",
    songLink: "",
    goal: "",
    selectedPackage: packageParam || "starter",
    notes: "",
    companyWebsite: "", // Honeypot field
  });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const submissionData: any = {
        artistName: formData.artistName.trim(),
        instagramHandle: formData.instagramHandle.trim(),
        email: formData.email.trim(),
        songLink: formData.songLink.trim(),
        selectedPackage: formData.selectedPackage,
        companyWebsite: formData.companyWebsite, // Honeypot
      };

      // Add optional fields if provided
      if (formData.goal) {
        submissionData.goal = formData.goal;
      }
      if (formData.notes) {
        submissionData.notes = formData.notes.trim();
      }
      if (coverFile) {
        submissionData.coverFileName = coverFile.name;
        submissionData.coverFileSize = coverFile.size;
      }

      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit. Please try again.");
      }

      // Success
      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
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
              htmlFor="instagramHandle"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Instagram Handle *
            </label>
            <input
              type="text"
              id="instagramHandle"
              name="instagramHandle"
              required
              value={formData.instagramHandle}
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
              onChange={handleFileChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            />
            {coverFile && (
              <p className="mt-2 text-sm text-gray-600">
                Selected: {coverFile.name} ({(coverFile.size / 1024).toFixed(2)} KB)
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="goal"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              What's your goal? (Optional)
            </label>
            <select
              id="goal"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            >
              <option value="">Select a goal (optional)</option>
              <option value="streams">Increase Streams</option>
              <option value="followers">Grow Followers</option>
              <option value="collab">Brand Collaboration</option>
              <option value="event">Event Promotion</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="selectedPackage"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Choose Package *
            </label>
            <select
              id="selectedPackage"
              name="selectedPackage"
              required
              value={formData.selectedPackage}
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

          <div>
            <label
              htmlFor="notes"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              value={formData.notes}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F] resize-none"
              placeholder="Any additional information you'd like to share..."
            />
          </div>

          {/* Honeypot field - hidden from users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="companyWebsite">Company Website</label>
            <input
              type="text"
              id="companyWebsite"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              value={formData.companyWebsite}
              onChange={handleChange}
            />
          </div>

          {error && (
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm font-medium">{error}</p>
            </div>
          )}

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

