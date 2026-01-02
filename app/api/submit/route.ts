import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SubmissionData {
  artistName: string;
  instagramHandle: string;
  email: string;
  songLink: string;
  selectedPackage: string;
  goal?: string;
  notes?: string;
  coverFileName?: string;
  coverFileSize?: number;
  companyWebsite?: string; // Honeypot field
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

function formatFileSize(bytes?: number): string {
  if (!bytes) return "N/A";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export async function POST(request: NextRequest) {
  try {
    const body: SubmissionData = await request.json();

    // Honeypot check - if filled, return success but don't send email
    if (body.companyWebsite && body.companyWebsite.trim() !== "") {
      console.log("Honeypot field filled, ignoring submission");
      return NextResponse.json({ success: true });
    }

    // Server-side validation
    if (!body.artistName || body.artistName.trim() === "") {
      return NextResponse.json(
        { error: "Artist name is required" },
        { status: 400 }
      );
    }

    if (!body.instagramHandle || body.instagramHandle.trim() === "") {
      return NextResponse.json(
        { error: "Instagram handle is required" },
        { status: 400 }
      );
    }

    if (!body.email || !validateEmail(body.email)) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!body.songLink || !validateURL(body.songLink)) {
      return NextResponse.json(
        { error: "Valid song link URL is required" },
        { status: 400 }
      );
    }

    if (!body.selectedPackage || body.selectedPackage.trim() === "") {
      return NextResponse.json(
        { error: "Package selection is required" },
        { status: 400 }
      );
    }

    // Check for required environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const toEmail = process.env.SUBMISSIONS_TO_EMAIL || "rapsmedia.tv@gmail.com";
    const fromEmail =
      process.env.SUBMISSIONS_FROM_EMAIL || "RapsMedia <onboarding@resend.dev>";

    // Format Instagram handle (ensure it starts with @)
    const instagramHandle = body.instagramHandle.startsWith("@")
      ? body.instagramHandle
      : `@${body.instagramHandle}`;

    // Build email content
    const emailSubject = `New RapsMedia Submission — ${body.artistName} — ${body.selectedPackage}`;

    const emailBody = `
New music submission received from RapsMedia website.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ARTIST INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Artist Name: ${body.artistName}
Instagram Handle: ${instagramHandle}
Email: ${body.email}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SUBMISSION DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Song Link: ${body.songLink}
Selected Package: ${body.selectedPackage}
${body.goal ? `Goal: ${body.goal}` : ""}
${body.notes ? `Notes: ${body.notes}` : ""}
${body.coverFileName ? `Cover Art: ${body.coverFileName} (${formatFileSize(body.coverFileSize)})` : ""}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Instagram: ${process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/rapsmedia/"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `.trim();

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      text: emailBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email notification" },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

