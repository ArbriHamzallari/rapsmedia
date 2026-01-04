# How to Publish a New Article/Blog Post

## Overview
All articles are stored in **`lib/data/articles.ts`** as a TypeScript array. To publish a new article, you need to add a new article object to this array.

---

## Step-by-Step Guide

### Step 1: Open the Articles Data File
Navigate to: **`lib/data/articles.ts`**

This file contains all articles in an array. You'll add your new article object here.

---

### Step 2: Understand the Article Structure
Each article must follow this structure (defined in `lib/types.ts`):

```typescript
{
  slug: string;                    // Unique URL-friendly identifier (e.g., "my-new-article-title")
  title: string;                   // Article headline
  excerpt: string;                 // Short description (appears in previews)
  category: Category;              // One of the valid categories (see below)
  coverImage: string;              // URL to the cover image
  author: string;                  // Author's name
  date: string;                    // Publication date (YYYY-MM-DD format)
  readTime: number;                // Estimated reading time in minutes
  tags: string[];                  // Array of tag strings
  contentSections: ContentSection[]; // Array of content blocks (see below)
  featured?: boolean;              // Optional: Show in featured section
  trending?: boolean;              // Optional: Show trending badge
  views?: number;                  // Optional: View count
}
```

### Valid Categories
Choose ONE from:
- `"music"`
- `"news"`
- `"interviews"`
- `"rising-stars"`
- `"culture"`
- `"lifestyle"`
- `"entertainment"`
- `"sports"`
- `"power-rankings"`

### Content Sections Types
Each `contentSections` array item can be:

1. **Heading**
   ```typescript
   { type: "heading", content: "Your Heading Text" }
   ```

2. **Paragraph**
   ```typescript
   { type: "paragraph", content: "Your paragraph text here..." }
   ```

3. **Quote**
   ```typescript
   { type: "quote", content: "Quote text here" }
   ```

4. **Image**
   ```typescript
   { type: "image", imageUrl: "https://example.com/image.jpg" }
   ```

5. **Instagram Embed**
   ```typescript
   { type: "instagram", instagramUrl: "https://instagram.com/p/example" }
   ```

---

### Step 3: Create Your Article Object
Add your new article to the `articles` array in `lib/data/articles.ts`. 

**Important:** Place it at the **beginning** of the array (after the opening bracket `[`) if you want it to appear as the "latest" article.

Example:

```typescript
export const articles: Article[] = [
  {
    slug: "my-awesome-new-article",
    title: "My Awesome New Article Title",
    excerpt: "This is a brief description that appears in article previews and search results.",
    category: "music",
    coverImage: getPlaceholderImage(800, 600, "my-article"),
    author: "Your Name",
    date: "2025-01-20",
    readTime: 5,
    tags: ["tag1", "tag2", "tag3"],
    featured: true,
    trending: false,
    views: 0,
    contentSections: [
      { type: "heading", content: "Introduction" },
      { type: "paragraph", content: "Your introduction paragraph goes here." },
      { type: "heading", content: "Main Content" },
      { type: "paragraph", content: "Your main content paragraph goes here." },
      { type: "quote", content: "An inspiring quote if needed" },
      { type: "paragraph", content: "More content..." },
    ],
  },
  // ... existing articles
];
```

---

### Step 4: Generate a Unique Slug
- **Slug format:** lowercase, hyphens instead of spaces
- **Must be unique** - no two articles can have the same slug
- **Examples:** 
  - Good: `"my-new-article"`, `"hip-hop-trends-2025"`
  - Bad: `"My New Article"` (has spaces and capitals)

The slug becomes part of the URL: `yoursite.com/article/my-new-article`

---

### Step 5: Add Cover Image
You have two options:

**Option A: Use placeholder (for testing)**
```typescript
coverImage: getPlaceholderImage(800, 600, "unique-seed"),
```
This generates a placeholder image automatically.

**Option B: Use your own image**
1. Place your image in the `public/` folder (e.g., `public/articles/my-image.jpg`)
2. Reference it like:
   ```typescript
   coverImage: "/articles/my-image.jpg"
   ```

---

### Step 6: Save the File
After adding your article object, save the file (`Ctrl+S` or `Cmd+S`).

---

### Step 7: View Your Article
1. **Development Server:** If your dev server is running, it will automatically reload
2. **Access your article:** 
   - Direct URL: `http://localhost:3000/article/your-slug-here`
   - Homepage: If `featured: true`, it will appear in the Featured Stories section
   - Category page: `http://localhost:3000/your-category`

---

## Complete Example

Here's a complete example of a new article:

```typescript
{
  slug: "best-hip-hop-albums-2025",
  title: "The 10 Best Hip-Hop Albums of 2025 (So Far)",
  excerpt: "A comprehensive roundup of the most impactful hip-hop releases this year, from underground gems to chart-topping hits.",
  category: "music",
  coverImage: getPlaceholderImage(800, 600, "albums-2025"),
  author: "John Doe",
  date: "2025-01-20",
  readTime: 10,
  tags: ["albums", "2025", "hip-hop", "music"],
  featured: true,
  trending: true,
  views: 0,
  contentSections: [
    { type: "heading", content: "Introduction" },
    { 
      type: "paragraph", 
      content: "2025 has already delivered some incredible hip-hop albums. From established artists pushing boundaries to newcomers making their mark, the year is off to a strong start." 
    },
    { type: "heading", content: "The Top Picks" },
    { 
      type: "paragraph", 
      content: "Here are the albums that have stood out this year, selected based on artistic merit, cultural impact, and listener reception." 
    },
    { type: "quote", content: "Music is the universal language that connects us all." },
    { type: "heading", content: "What Makes These Albums Special" },
    { 
      type: "paragraph", 
      content: "Each album on this list brings something unique to the table, whether it's innovative production, powerful storytelling, or groundbreaking collaborations." 
    },
  ],
}
```

---

## Quick Checklist

Before publishing, make sure:
- [ ] Slug is unique and URL-friendly (lowercase, hyphens)
- [ ] Category is one of the valid options
- [ ] Date is in YYYY-MM-DD format
- [ ] All required fields are filled
- [ ] contentSections array has at least one item
- [ ] Article is added to the `articles` array in `lib/data/articles.ts`

---

## Where Articles Appear

- **Homepage (`/`):** Featured articles (if `featured: true`) and latest articles
- **Category Pages (`/[category]`):** All articles in that category
- **Article Page (`/article/[slug]`):** Individual article view
- **Search/Filter:** Articles can be filtered by category, tags, etc.

---

## Need Help?

- Check existing articles in `lib/data/articles.ts` for reference
- Review the type definitions in `lib/types.ts`
- Look at how articles are rendered in `app/article/[slug]/page.tsx`
