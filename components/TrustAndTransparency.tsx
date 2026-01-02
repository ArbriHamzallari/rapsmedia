export default function TrustAndTransparency() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            Trust & Transparency
          </h2>
        </div>

        <div className="bg-[rgba(255,255,255,0.85)] backdrop-blur-sm rounded-lg border-2 border-[rgba(174,187,255,0.4)] shadow-[0_4px_16px_rgba(174,187,255,0.2)] p-8 md:p-10">
          {/* What's Included */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-2xl font-bold text-[#0B0B0F]">
                What's Included
              </h3>
            </div>
            <ul className="space-y-2 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-[#8FA0FF] mt-1">•</span>
                <span className="text-[#4A4A5C]">Professional content curation and creation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FA0FF] mt-1">•</span>
                <span className="text-[#4A4A5C]">Publication across our social media channels</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FA0FF] mt-1">•</span>
                <span className="text-[#4A4A5C]">Results snapshot with key metrics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#8FA0FF] mt-1">•</span>
                <span className="text-[#4A4A5C]">Transparent reporting on performance</span>
              </li>
            </ul>
          </div>

          {/* Turnaround Time */}
          <div className="mb-8 pb-8 border-b border-[rgba(174,187,255,0.3)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">⏱️</span>
              <h3 className="text-2xl font-bold text-[#0B0B0F]">
                Turnaround Time
              </h3>
            </div>
            <p className="text-[#4A4A5C] ml-11">
              24–72 hours from approval to publication
            </p>
          </div>

          {/* Content Rules */}
          <div className="mb-8 pb-8 border-b border-[rgba(174,187,255,0.3)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📋</span>
              <h3 className="text-2xl font-bold text-[#0B0B0F]">
                Content Rules
              </h3>
            </div>
            <ul className="space-y-2 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#4A4A5C]">No hate speech or discriminatory content</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#4A4A5C]">No stolen or unlicensed content</span>
              </li>
            </ul>
          </div>

          {/* What We Don't Do */}
          <div className="mb-8 pb-8 border-b border-[rgba(174,187,255,0.3)]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">🚫</span>
              <h3 className="text-2xl font-bold text-[#0B0B0F]">
                What We Don't Do
              </h3>
            </div>
            <ul className="space-y-2 ml-11">
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#4A4A5C]">No bots or automated engagement</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 mt-1">✗</span>
                <span className="text-[#4A4A5C]">No fake followers or inflated metrics</span>
              </li>
            </ul>
          </div>

          {/* Redo/Refund Policy */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">💼</span>
              <h3 className="text-2xl font-bold text-[#0B0B0F]">
                Redo & Refund Policy
              </h3>
            </div>
            <p className="text-[#4A4A5C] ml-11 leading-relaxed">
              If we're unable to deliver on our promise or if your content is rejected per our content rules, you're eligible for a full refund. For quality concerns, we offer one revision at no additional cost. Contact us within 7 days of publication to request a redo or refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

