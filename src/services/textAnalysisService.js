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

export function getWordFrequencies(paragraphs) {
  if (!paragraphs || paragraphs.length === 0) return {};

  const text = Array.isArray(paragraphs) ? paragraphs.join(' ') : paragraphs;

  const words = text
    .toLowerCase()
    .replace(/[.,!?;:()"]/g, '')
    .split(/\s+/)
    .filter((w) => w.length > 0);

  const counts = {};
  for (const word of words) {
    counts[word] = (counts[word] || 0) + 1;
  }

  return counts; // 👈 Diccionario
}