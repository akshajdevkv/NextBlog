export function generateExcerpt(content: string, maxLength: number = 150): string {
  // Remove HTML tags if present
  let plainText = content.replace(/<[^>]*>/g, '');
  
  // Remove common markdown formatting
  plainText = plainText
    .replace(/#{1,6}\s/g, '') // Remove markdown headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove code blocks
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links, keep text
    .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
    .replace(/>/g, '') // Remove blockquotes
    .replace(/\n+/g, ' ') // Replace line breaks with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // If content is already short enough, return as-is
  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Truncate at maxLength
  const truncated = plainText.substring(0, maxLength);
  
  // Find the last complete word to avoid cutting mid-word
  const lastSpace = truncated.lastIndexOf(' ');
  const lastPunctuation = Math.max(
    truncated.lastIndexOf('.'),
    truncated.lastIndexOf('!'),
    truncated.lastIndexOf('?')
  );

  // Use the last complete sentence if it's reasonably long
  if (lastPunctuation > maxLength * 0.6) {
    return truncated.substring(0, lastPunctuation + 1);
  }
  
  // Otherwise, use the last complete word
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace) + '...';
  }
  
  // If no good break point, just truncate and add ellipsis
  return truncated + '...';
}
