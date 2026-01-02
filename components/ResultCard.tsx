import { type ResultCase } from "@/lib/mock/results";

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

export default function ResultCard({ result }: { result: ResultCase }) {
  const getDeltaColor = (deltaLabel: string) => {
    if (deltaLabel.includes("+")) {
      return "bg-[#AEBBFF] text-[#0B0B0F]";
    }
    return "bg-[#8FA0FF] text-white";
  };

  const getMainMetric = () => {
    if (result.goal === "Streams") {
      return {
        before: result.before.streams || 0,
        after: result.after.streams || 0,
        label: "Streams",
      };
    } else if (result.goal === "Followers") {
      return {
        before: result.before.followers || 0,
        after: result.after.followers || 0,
        label: "Followers",
      };
    } else {
      return {
        before: result.before.views || 0,
        after: result.after.views || 0,
        label: "Views",
      };
    }
  };

  const mainMetric = getMainMetric();

  return (
    <div className="bg-[rgba(197,208,255,0.4)] backdrop-blur-sm p-6 rounded-lg border border-[rgba(174,187,255,0.4)] shadow-[0_2px_8px_rgba(174,187,255,0.2)] hover:shadow-[0_4px_16px_rgba(174,187,255,0.3)] transition-all duration-300">
      {/* Artist Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div>
            <h3 className="font-bold text-[#0B0B0F] text-lg">{result.artistName}</h3>
            <p className="text-sm text-[#4A4A5C]">{result.handle} • {result.city}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDeltaColor(result.deltaLabel)}`}>
            {result.deltaLabel}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs text-[#4A4A5C]">
          <span className="px-2 py-1 bg-[rgba(174,187,255,0.3)] rounded">{result.promoType}</span>
          <span className="px-2 py-1 bg-[rgba(174,187,255,0.3)] rounded">{result.goal}</span>
          <span className="text-[#8FA0FF]">{result.date}</span>
        </div>
      </div>

      {/* Before → After Metrics */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-[rgba(255,255,255,0.6)] backdrop-blur-sm p-4 rounded border border-[rgba(174,187,255,0.3)]">
          <p className="text-xs text-[#4A4A5C] mb-1 uppercase tracking-wide">Before</p>
          <p className="text-2xl font-bold text-[#0B0B0F]">{formatNumber(mainMetric.before)}</p>
          <p className="text-xs text-[#4A4A5C] mt-1">{mainMetric.label}</p>
        </div>
        <div className="bg-[rgba(174,187,255,0.5)] backdrop-blur-sm p-4 rounded border border-[rgba(174,187,255,0.5)]">
          <p className="text-xs text-[#0B0B0F] mb-1 uppercase tracking-wide font-semibold">After</p>
          <p className="text-2xl font-bold text-[#0B0B0F]">{formatNumber(mainMetric.after)}</p>
          <p className="text-xs text-[#0B0B0F] mt-1 font-medium">{mainMetric.label}</p>
        </div>
      </div>

      {/* Additional Metrics */}
      <div className="grid grid-cols-3 gap-2 mb-4 text-xs">
        <div>
          <p className="text-[#4A4A5C]">Views</p>
          <p className="font-semibold text-[#0B0B0F]">
            {formatNumber(result.before.views || 0)} → {formatNumber(result.after.views || 0)}
          </p>
        </div>
        <div>
          <p className="text-[#4A4A5C]">Profile</p>
          <p className="font-semibold text-[#0B0B0F]">
            {formatNumber(result.before.profileVisits || 0)} → {formatNumber(result.after.profileVisits || 0)}
          </p>
        </div>
        <div>
          <p className="text-[#4A4A5C]">Clicks</p>
          <p className="font-semibold text-[#0B0B0F]">
            {formatNumber(result.before.linkClicks || 0)} → {formatNumber(result.after.linkClicks || 0)}
          </p>
        </div>
      </div>

      {/* Screenshot Proof (Optional) */}
      {result.screenshot && (
        <div className="mt-4 rounded border border-[rgba(174,187,255,0.3)] overflow-hidden bg-[rgba(255,255,255,0.5)]">
          <div className="aspect-video relative bg-gray-100">
            <div className="absolute inset-0 flex items-center justify-center text-[#4A4A5C] text-sm">
              Screenshot proof
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

