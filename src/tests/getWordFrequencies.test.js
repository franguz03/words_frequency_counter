import { getWordFrequencies } from '../services/textAnalysisService';

describe('getWordFrequencies', () => {
  test('returns an empty object for an empty array or null', () => {
    expect(getWordFrequencies([])).toEqual({});
    expect(getWordFrequencies(null)).toEqual({});
  });

  test('correctly counts simple words', () => {
    const input = ["Hello world hello"];
    const freq = getWordFrequencies(input);
    expect(freq).toEqual({ hello: 2, world: 1 });
  });

  test('ignores uppercase letters and punctuation', () => {
    const input = ["Hello, world! Hello."];
    const freq = getWordFrequencies(input);
    expect(freq).toEqual({ hello: 2, world: 1 });
  });

  test('handles arrays with multiple spaces', () => {
    const input = ["Hello   world  hello"];
    const freq = getWordFrequencies(input);
    expect(freq).toEqual({ hello: 2, world: 1 });
  });

  test('accepts a single string in addition to arrays', () => {
    const input = "Hello world hello";
    const freq = getWordFrequencies(input);
    expect(freq).toEqual({ hello: 2, world: 1 });
  });
});
