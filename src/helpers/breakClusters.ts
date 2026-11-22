export const breakClusters = (
  segments: string[],
  isConsonant: (segment: string) => boolean,
  vowel: string,
) => {
  if (segments.length > 1 && isConsonant(segments[0]) && isConsonant(segments[1])) {
    segments.splice(1, 0, vowel);
  }
  for (let i = 0; i + 2 < segments.length; i++) {
    if (segments.slice(i, i + 3).every(isConsonant)) segments.splice(i + 2, 0, vowel);
  }
  return segments.join("");
};
