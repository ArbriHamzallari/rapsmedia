"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How fast do you post?",
    answer:
      "We typically publish your content within 24–72 hours after approval. Rush orders may be available for an additional fee—contact us to discuss your timeline.",
  },
  {
    question: "Do you guarantee streams/followers?",
    answer:
      "We don't guarantee specific numbers, as authentic growth varies based on content quality, timing, and audience engagement. We focus on delivering real reach to the right audience and providing transparent reporting on what we deliver.",
  },
  {
    question: "Can I choose the posting time?",
    answer:
      "While we schedule posts for optimal engagement times, specific time requests can be accommodated when possible. Mention your preferred timing in your submission notes, and we'll do our best to align.",
  },
  {
    question: "What do you need from me?",
    answer:
      "We need your track (preferably via streaming link), cover art, artist bio or press release, and any specific messaging or goals you'd like us to highlight. Clear, high-quality assets help us create the best promotion.",
  },
  {
    question: "What if my content gets rejected?",
    answer:
      "If content doesn't align with our editorial standards (e.g., hate speech, stolen content, or quality issues), we'll communicate the reason and offer a full refund. We're committed to transparency throughout the process.",
  },
  {
    question: "Do I get analytics after?",
    answer:
      "Yes. After your promotion runs, you'll receive a results snapshot with key metrics including reach, engagement, and performance insights to help you understand the impact of your campaign.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[rgba(255,255,255,0.75)] backdrop-blur-sm rounded-lg border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-[rgba(174,187,255,0.1)] transition-colors focus:outline-none focus:ring-2 focus:ring-[#8FA0FF] focus:ring-offset-2 rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-bold text-[#0B0B0F] text-lg flex-1">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#8FA0FF] transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-[#4A4A5C] leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

