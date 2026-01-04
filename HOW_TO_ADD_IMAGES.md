# How to Add Images to Articles

## Quick Guide: Adding Cover Images

### Step 1: Save Your Image File
1. **Save your image** to: `public/articles/` folder
2. **Recommended formats:** `.jpg`, `.jpeg`, `.png`, `.webp`
3. **Recommended dimensions:** 800x600 pixels or larger (maintains quality when scaled)
4. **File naming:** Use lowercase, hyphens instead of spaces (e.g., `h2k-bleeda-nobody.jpg`)

### Step 2: Update the Article Code
In `lib/data/articles.ts`, update the `coverImage` field:

**Replace this:**
```typescript
coverImage: getPlaceholderImage(800, 600, "article-name"),
```

**With this:**
```typescript
coverImage: "/articles/your-image-filename.jpg",
```

**Important:** The path starts with `/articles/` (not `public/articles/`) because Next.js serves files from the `public` folder at the root URL.

---

## Adding Images Within Article Content

To add images in the middle of your article content (not just the cover), use the `image` content section type:

```typescript
contentSections: [
  { type: "heading", content: "Section Title" },
  { type: "paragraph", content: "Some text..." },
  { 
    type: "image", 
    imageUrl: "/articles/inline-image-1.jpg" 
  },
  { type: "paragraph", content: "More text..." },
]
```

### Steps:
1. Save the image to `public/articles/`
2. Reference it in your `contentSections` array with `type: "image"` and `imageUrl: "/articles/your-image.jpg"`

---

## Image Path Examples

| Image Location | Code Reference |
|----------------|----------------|
| `public/articles/h2k-bleeda-nobody.jpg` | `"/articles/h2k-bleeda-nobody.jpg"` |
| `public/articles/artist-promo.png` | `"/articles/artist-promo.png"` |
| `public/articles/interview-photo.webp` | `"/articles/interview-photo.webp"` |

---

## Complete Example: Adding an Article with Custom Images

```typescript
{
  slug: "my-new-article",
  title: "My New Article Title",
  excerpt: "Article description...",
  category: "music",
  coverImage: "/articles/my-cover-image.jpg",  // Cover image
  author: "Author Name",
  date: "2025-01-20",
  readTime: 5,
  tags: ["tag1", "tag2"],
  featured: true,
  contentSections: [
    { type: "heading", content: "Introduction" },
    { type: "paragraph", content: "Intro text..." },
    { type: "image", imageUrl: "/articles/image-1.jpg" },  // Inline image
    { type: "paragraph", content: "More content..." },
    { type: "image", imageUrl: "/articles/image-2.png" },  // Another inline image
  ],
}
```

---

## Tips

1. **File Organization:** Keep all article images in `public/articles/` for easy management
2. **File Names:** Use descriptive, URL-friendly names (lowercase, hyphens)
3. **Image Optimization:** Compress images before uploading to reduce page load times
4. **Dimensions:** 
   - Cover images: 800x600px or larger (16:9 or 4:3 ratio works well)
   - Inline images: Can vary, but 800px wide is a good standard
5. **File Size:** Try to keep images under 500KB for better performance

---

## Current Setup for H2k Bleeda Article

For the H2k Bleeda article, the image should be saved as:
- **File path:** `public/articles/h2k-bleeda-nobody.jpg` (or `.png` if that's your format)
- **Already configured in code as:** `coverImage: "/articles/h2k-bleeda-nobody.jpg"`

Just save your image file to that location with that exact filename, and it will work!
