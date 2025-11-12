export function analyzeText(paragraphsArray) {
  if (!Array.isArray(paragraphsArray) || paragraphsArray.length === 0) {
    return { words: 0, characters: 0, paragraphs: 0 };
  }

  const fullText = paragraphsArray.join(' ');
  const words = fullText.split(/\s+/).filter(Boolean).length;
  const characters = fullText.length;
  const paragraphs = paragraphsArray.length;

  return {
    words,
    characters,
    paragraphs
  };
}
