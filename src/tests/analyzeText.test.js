import { analyzeText } from '../services/textAnalysisService';

describe('analyzeText', () => {
  test('returns 0 for an empty array', () => {
    expect(analyzeText([])).toEqual({ words: 0, characters: 0, paragraphs: 0 });
  });

  test('returns 0 for a non-array value', () => {
    expect(analyzeText(null)).toEqual({ words: 0, characters: 0, paragraphs: 0 });
    expect(analyzeText(undefined)).toEqual({ words: 0, characters: 0, paragraphs: 0 });
  });

  test('correctly counts words, characters, and paragraphs', () => {
    const input = ["Hello world", "This is a test"];
    const result = analyzeText(input);
    expect(result.words).toBe(6);  // "Hello", "world", "This", "is", "a", "test"
    expect(result.characters).toBe(input.join(' ').length);
    expect(result.paragraphs).toBe(2);
  });

  test('handles strings with multiple spaces', () => {
    const input = ["Hello   world", "  This is  a test  "];
    const result = analyzeText(input);
    expect(result.words).toBe(6);
  });
});

