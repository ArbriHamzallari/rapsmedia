import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Music | RapsMedia",
  description: "Get featured on RapsMedia. Submit your music and our team will review your submission.",
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

