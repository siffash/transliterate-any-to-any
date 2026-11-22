const ELIDED = /(?<=[\p{L}\p{M}])['’](?=[ˈˌ]?\p{L})/gu;
const MARK = "\uE000";

export const keepElision = (
  ipa: string,
  transliterator: { transliterate: (text: string) => string },
  apostrophe = "’",
) => transliterator.transliterate(ipa.replace(ELIDED, MARK)).replaceAll(MARK, apostrophe);
