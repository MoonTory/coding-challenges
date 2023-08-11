const testCases = [
  {
    word1: 'abc',
    word2: 'pqr',
    solution: 'apbqcr'
  },
  {
    word1: 'ab',
    word2: 'pqrs',
    solution: 'apbqrs'
  },
  {
    word1: 'abcd',
    word2: 'pq',
    solution: 'apbqcd'
  }
];

export function mergeAlternately(word1: string, word2: string): string {
  let result: string = '';

  let pointerA: number = 0;
  let pointerB: number = 0;
  let lengthA: number = word1.length;
  let lengthB: number = word2.length;

  while (pointerA < lengthA || pointerB < lengthB) {
    if (pointerA < lengthA) result += word1[pointerA++];

    if (pointerB < lengthB) result += word2[pointerB++];
  }

  return result;
}

(() => {
  testCases.forEach((testCase, idx) => {
    const result = mergeAlternately(testCase.word1, testCase.word2);

    if (result === testCase.solution) return console.log(`Case ${idx + 1} correct!!`);

    return console.log(`Case  ${idx + 1} incorrect :(`);
  });
})();
