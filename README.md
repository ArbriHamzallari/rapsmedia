This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

The following environment variables are required for the submission form to work:

### Required for Email Notifications

- `RESEND_API_KEY` - Your Resend API key for sending emails
  - Get one at [resend.com](https://resend.com)
  - Add to Vercel environment variables for production

- `SUBMISSIONS_TO_EMAIL` - Email address to receive submissions (defaults to `rapsmedia.tv@gmail.com`)
  - Example: `rapsmedia.tv@gmail.com`

- `SUBMISSIONS_FROM_EMAIL` - Email address to send from (must be verified in Resend)
  - Example: `RapsMedia <onboarding@resend.dev>`
  - Note: For production, use a verified domain email like `RapsMedia <noreply@yourdomain.com>`

### Optional

- `NEXT_PUBLIC_INSTAGRAM_URL` - Instagram profile URL (defaults to `https://www.instagram.com/rapsmedia/`)
  - Used in footer and email notifications

### Setting Up Locally

1. Create a `.env.local` file in the root directory:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
SUBMISSIONS_TO_EMAIL=rapsmedia.tv@gmail.com
SUBMISSIONS_FROM_EMAIL=RapsMedia <onboarding@resend.dev>
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/rapsmedia/
```

2. For production on Vercel, add these as environment variables in your project settings.

### Testing the Submission Form

1. Ensure all required environment variables are set
2. Navigate to `/submit` page
3. Fill out the form and submit
4. Check your email inbox for the notification

### Common Issues

- **"Email service is not configured"** - `RESEND_API_KEY` is missing or invalid
- **"Failed to send email notification"** - Check Resend dashboard for errors, verify `SUBMISSIONS_FROM_EMAIL` is verified
- **Form submits but no email received** - Check server logs, verify email addresses are correct
- **Honeypot field filled** - If the hidden `companyWebsite` field is filled, the submission is silently ignored (spam protection)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Important**: Don't forget to add all required environment variables in your Vercel project settings before deploying!
