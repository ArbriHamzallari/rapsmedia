import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Rankings | RapsMedia",
  description: "The top artists making waves in hip-hop this month.",
};

export default function PowerRankingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

