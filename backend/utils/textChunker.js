/**
 * Split text into chunks for better AI processing
 */
export const chunkText = (text, chunkSize = 500, overlap = 50) => {
  if (!text || text.trim().length === 0) {
    return [];
  }

  const cleanedText = text
    .replace(/\r\n/g, '\n')
    .replace(/\s+/g, ' ')
    .replace(/\n\s+/g, '\n')
    .replace(/\n\n+/g, '\n\n')
    .trim();

  const paragraphs = cleanedText.split(/\n+/).filter(p => p.trim().length > 0);

  const chunks = [];
  let currentChunk = [];
  let currentWordCount = 0;
  let chunkIndex = 0;

  for (const paragraph of paragraphs) {
    const words = paragraph.trim().split(/\s+/);
    const wordCount = words.length;

    // Large paragraph → split by words
    if (wordCount > chunkSize) {
      if (currentChunk.length > 0) {
        chunks.push({
          content: currentChunk.join('\n\n'),
          chunkIndex: chunkIndex++,
          pageNumber: 0,
        });
        currentChunk = [];
        currentWordCount = 0;
      }

      for (let i = 0; i < words.length; i += chunkSize - overlap) {
        chunks.push({
          content: words.slice(i, i + chunkSize).join(' '),
          chunkIndex: chunkIndex++,
          pageNumber: 0,
        });
        if (i + chunkSize >= words.length) break;
      }
      continue;
    }

    // Normal paragraph
    if (currentWordCount + wordCount > chunkSize && currentChunk.length > 0) {
      chunks.push({
        content: currentChunk.join('\n\n'),
        chunkIndex: chunkIndex++,
        pageNumber: 0,
      });

      const overlapWords = currentChunk
        .join(' ')
        .split(/\s+/)
        .slice(-overlap);

      currentChunk = [overlapWords.join(' '), paragraph.trim()];
      currentWordCount = overlapWords.length + wordCount;
    } else {
      currentChunk.push(paragraph.trim());
      currentWordCount += wordCount;
    }
  }

  // Push last chunk
  if (currentChunk.length > 0) {
    chunks.push({
      content: currentChunk.join('\n\n'),
      chunkIndex: chunkIndex++,
      pageNumber: 0,
    });
  }

  return chunks;
};

/**
 * Find relevant chunks based on keyword matching
 */
export const findRelevantChunks = (chunks, query, maxChunks = 3) => {
  if (!chunks || !chunks.length || !query) return [];

  const stopWords = new Set([
    'the','is','at','which','on','a','an','and','or','but',
    'in','with','to','for','of','as','by','this','that','it'
  ]);

  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w));

  if (!queryWords.length) {
    return chunks.slice(0, maxChunks);
  }

  const scoredChunks = chunks.map((chunk, index) => {
    const content = chunk.content.toLowerCase();
    let score = 0;

    for (const word of queryWords) {
      const exact = (content.match(new RegExp(`\\b${word}\\b`, 'g')) || []).length;
      const partial = (content.match(new RegExp(word, 'g')) || []).length;
      score += exact * 3 + Math.max(0, partial - exact) * 1.5;
    }

    const matchedWords = queryWords.filter(w => content.includes(w)).length;
    score += matchedWords > 1 ? matchedWords * 2 : 0;

    const normalizedScore = score / Math.sqrt(content.split(/\s+/).length);
    const positionBonus = 1 - (index / chunks.length) * 0.1;

    return {
      ...chunk,
      score: normalizedScore * positionBonus,
      matchedWords,
    };
  });

  return scoredChunks
    .filter(c => c.score > 0)
    .sort((a, b) =>
      b.score !== a.score
        ? b.score - a.score
        : b.matchedWords - a.matchedWords
    )
    .slice(0, maxChunks);
};
