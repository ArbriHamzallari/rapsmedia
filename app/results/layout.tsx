import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results | RapsMedia",
  description: "Real outcomes from real promotions. Browse proof of results from artists who promoted with RapsMedia.",
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

