// A French elision apostrophe (d'Artagnan, Jeanne d'Arc) stays in the IPA, but every IPA rule set deletes
// ' and ’ (an ASCII stress mark), so it goes through them as a private-use character and comes back after.
// ipa-tr doesn't devoice a d before it (d’Artanan).
const ELIDED = /(?<=[\p{L}\p{M}])['’](?=\p{L})/gu;
const MARK = "\uE000";

/**
 * Converts IPA, keeping its elision apostrophes.
 * @param ipa - The IPA, e.g. "d'aʁtaɲɑn".
 * @param transliterator - The IPA transliterator.
 * @param apostrophe - The target's apostrophe.
 * @returns the converted text, e.g. "д’артаньян".
 */
export const keepElision = (
  ipa: string,
  transliterator: { transliterate: (text: string) => string },
  apostrophe = "’",
) => transliterator.transliterate(ipa.replace(ELIDED, MARK)).replaceAll(MARK, apostrophe);
