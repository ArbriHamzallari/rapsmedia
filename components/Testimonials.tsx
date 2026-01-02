"use client";

import Image from "next/image";
import { testimonials, type Testimonial } from "@/lib/mock/testimonials";

function StarRating({ rating }: { rating: number }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        if (i < fullStars) {
          return <span key={i} className="text-[#8FA0FF]">★</span>;
        } else if (i === fullStars && hasHalfStar) {
          return <span key={i} className="text-[#8FA0FF]">☆</span>;
        } else {
          return <span key={i} className="text-gray-300">★</span>;
        }
      })}
      <span className="ml-2 text-sm text-[#4A4A5C] font-medium">{rating.toFixed(1)}</span>
    </div>
  );
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: Testimonial; featured?: boolean }) {
  return (
    <div
      className={`bg-[rgba(255,255,255,0.75)] backdrop-blur-sm rounded-lg border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.25)] transition-all duration-300 ${
        featured ? "p-8 md:p-10" : "p-6"
      }`}
    >
      {/* Rating */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Quote */}
      <blockquote className={`text-[#0B0B0F] mb-6 leading-relaxed ${featured ? "text-lg" : "text-base"}`}>
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author Info */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="font-bold text-[#0B0B0F]">{testimonial.name}</div>
          <div className="text-sm text-[#4A4A5C]">{testimonial.handle}</div>
          <div className="text-xs text-[#4A4A5C] mt-1">
            {testimonial.city} • {testimonial.genre}
          </div>
        </div>
      </div>

      {/* Proof */}
      <div className="pt-4 border-t border-[rgba(174,187,255,0.3)]">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-[#4A4A5C] uppercase tracking-wide">
            Proof: {testimonial.proofType}
          </span>
          {testimonial.proofImage && (
            <div className="w-12 h-12 rounded border border-[rgba(174,187,255,0.3)] overflow-hidden bg-gray-100 flex-shrink-0">
              <div className="w-full h-full flex items-center justify-center text-[#4A4A5C] text-xs">
                📷
              </div>
              {/* Uncomment when images are available:
              <Image
                src={testimonial.proofImage}
                alt={`Proof from ${testimonial.name}`}
                width={48}
                height={48}
                className="object-cover"
              />
              */}
            </div>
          )}
          <span className="text-xs text-[#8FA0FF] ml-auto">{testimonial.date}</span>
        </div>
      </div>
    </div>
  );
}

interface TestimonialsProps {
  limit?: number;
  showFeatured?: boolean;
}

export default function Testimonials({ limit, showFeatured = true }: TestimonialsProps) {
  const displayTestimonials = limit ? testimonials.slice(0, limit) : testimonials;
  const featuredTestimonial = showFeatured ? displayTestimonials[0] : null;
  const otherTestimonials = showFeatured ? displayTestimonials.slice(1) : displayTestimonials;

  return (
    <section className="py-16 px-4 bg-[rgba(228,237,255,0.4)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            What Artists Say
          </h2>
          <p className="text-lg text-[#4A4A5C] max-w-2xl mx-auto">
            Real feedback from artists who've worked with RapsMedia
          </p>
        </div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <div className="mb-12">
            <TestimonialCard testimonial={featuredTestimonial} featured={true} />
          </div>
        )}

        {/* Grid of Other Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

