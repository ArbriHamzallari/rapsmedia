"use client";

import { useState } from "react";

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscribeModal({ isOpen, onClose }: SubscribeModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: just show success state
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      onClose();
    }, 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[rgba(255,255,255,0.95)] backdrop-blur-md rounded-lg p-8 max-w-md w-full mx-4 border border-[rgba(174,187,255,0.3)] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
        onClick={(e) => e.stopPropagation()}
      >
        {submitted ? (
          <div className="text-center">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-2xl font-bold text-[#0B0B0F] mb-2">
              Thanks — confirm your email
            </h2>
            <p className="text-[#4A4A5C]">
              Check your inbox to confirm your subscription.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-[#0B0B0F] mb-4">
              Subscribe to RapsMedia
            </h2>
            <p className="text-[#4A4A5C] mb-6">
              Get the latest hip-hop news, artist features, and exclusive content delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border border-[rgba(174,187,255,0.4)] rounded-lg mb-4 bg-white/80 focus:outline-none focus:ring-2 focus:ring-[#AEBBFF] focus:border-[#AEBBFF] text-[#0B0B0F]"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#AEBBFF] text-[#0B0B0F] font-semibold rounded-lg hover:bg-[#8FA0FF] transition-colors"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-[rgba(174,187,255,0.4)] rounded-lg hover:bg-[rgba(255,255,255,0.8)] transition-colors text-[#0B0B0F]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

