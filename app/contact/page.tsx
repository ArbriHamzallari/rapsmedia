"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
            Message Sent!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for reaching out. We'll get back to you as soon as possible.
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
          <h1 className="text-4xl font-bold text-[#0B0B0F] mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have a question or want to work with us? Send us a message and we'll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
            <h3 className="font-bold text-[#0B0B0F] mb-2">General Inquiries</h3>
            <a
              href="mailto:hello@rapsmedia.tv"
              className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors"
            >
              hello@rapsmedia.tv
            </a>
          </div>
          <div className="bg-[#AEBBFF]/10 p-6 rounded-lg">
            <h3 className="font-bold text-[#0B0B0F] mb-2">Business & Promotions</h3>
            <a
              href="mailto:promo@rapsmedia.tv"
              className="text-[#AEBBFF] hover:text-[#8FA0FF] transition-colors"
            >
              promo@rapsmedia.tv
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
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
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Subject *
            </label>
            <select
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            >
              <option value="">Select a subject</option>
              <option value="general">General Inquiry</option>
              <option value="promotion">Promotion Package</option>
              <option value="editorial">Editorial Submission</option>
              <option value="partnership">Partnership Opportunity</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#0B0B0F] mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-[rgba(174,187,255,0.4)] bg-white/80 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[#8FA0FF] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

