const steps = [
  {
    number: 1,
    title: "Submit your track",
    icon: "📤",
    description: "Upload your music and share your story with us.",
  },
  {
    number: 2,
    title: "Choose package + goal",
    icon: "🎯",
    description: "Select the promotion package that aligns with your goals.",
  },
  {
    number: 3,
    title: "We curate + publish",
    icon: "✨",
    description: "Our team curates and publishes your content to our audience.",
  },
  {
    number: 4,
    title: "You get a results snapshot",
    icon: "📊",
    description: "Receive detailed analytics and performance insights.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B0B0F] mb-4">
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-[rgba(255,255,255,0.75)] backdrop-blur-sm p-6 rounded-lg border border-[rgba(174,187,255,0.3)] shadow-[0_2px_8px_rgba(174,187,255,0.15)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.25)] transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{step.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-[#8FA0FF]">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B0B0F]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#4A4A5C] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="text-center">
          <p className="text-[#4A4A5C] text-lg font-medium">
            No bots. No fake followers. Culture-first reach.
          </p>
        </div>
      </div>
    </section>
  );
}

