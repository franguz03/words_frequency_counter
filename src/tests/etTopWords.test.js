import { getTopWords } from '../services/textAnalysisService';

describe('getTopWords', () => {
  test('returns an empty array if freqDict is empty or null', () => {
    expect(getTopWords({})).toEqual([]);
    expect(getTopWords(null)).toEqual([]);
  });

  test('correctly returns the top N words', () => {
    const freqDict = { hello: 5, world: 2, test: 3 };
    const top = getTopWords(freqDict, 2);
    expect(top).toEqual([
      { word: 'hello', count: 5 },
      { word: 'test', count: 3 },
    ]);
  });

  test('respects topN even if there are fewer words', () => {
    const freqDict = { a: 1 };
    const top = getTopWords(freqDict, 3);
    expect(top).toEqual([{ word: 'a', count: 1 }]);
  });

  test('sorts correctly even if counts are equal', () => {
    const freqDict = { a: 2, b: 2, c: 1 };
    const top = getTopWords(freqDict, 3);
    expect(top[0].count).toBe(2);
    expect(top[1].count).toBe(2);
    expect(top[2].count).toBe(1);
  });
});

