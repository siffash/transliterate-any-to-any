// Arabic-script words missing from the map come out of the letter rules without their unwritten short vowels
// (هشتپر → hʃtpɾ). Arabic, Persian and Urdu names have no word-initial clusters and no runs of three consonants,
// so the vowel goes back there: after the first consonant and before the third (hæʃtæpɾ).

/**
 * Inserts a short vowel into the clusters of a word's segments.
 * @param segments - The word split into sounds, e.g. ["h", "ʃ", "t", "p", "ɾ"]; changed in place.
 * @param isConsonant - Whether a segment is a consonant.
 * @param vowel - The vowel to insert, e.g. "æ".
 * @returns the joined segments, e.g. "hæʃtæpɾ".
 */
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
