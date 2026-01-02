import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RapsMedia",
  description: "Have a question or want to work with us? Send us a message and we'll get back to you.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

