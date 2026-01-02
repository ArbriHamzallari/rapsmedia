// Placeholder image utility
// In production, replace with actual image URLs or use a service like Unsplash, Picsum, etc.

export function getPlaceholderImage(width: number, height: number, seed?: string): string {
  // Using Picsum Photos for placeholder images
  const seedParam = seed ? `?random=${seed}` : '';
  return `https://picsum.photos/seed/${seed || 'rapsmedia'}/${width}/${height}`;
}

// Alternative: Use a solid color placeholder with text
export function getColorPlaceholder(width: number, height: number, text: string): string {
  const encodedText = encodeURIComponent(text);
  return `https://via.placeholder.com/${width}x${height}/AEBBFF/0B0B0F?text=${encodedText}`;
}

