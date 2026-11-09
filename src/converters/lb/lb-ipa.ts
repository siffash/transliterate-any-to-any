import { Text } from "types";

export const lbIpa = async <T = Text>(
  text: Text,
  velarA = false,
  // A target that reads French words its own way (ja, th) passes their IPA
  frenchIpa?: (words: string[]) => Promise<string[]>,
  rules = "",
): Promise<T> => {
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { convertWithExceptions } = await import("helpers/convertWithExceptions");
  const { filterIpa } = await import("helpers/filterIpa");
  const { lbFrenchIpa } = await import("converters/lb/lb-french");

  const transliterator = RBT.fromRules(lbIpaRules + rules);
  const french = await lbFrenchIpa(
    typeof text === "string" ? [text] : text,
    lbIpaMap,
    frenchIpa ??
      (async words => (await import("converters/fr/fr-ipa")).frIpa<string[]>(words, { velarA })),
    !!frenchIpa,
  );

  const exception = (word: string) => {
    const key = word.normalize("NFC").toLocaleLowerCase("lb");
    if (Object.prototype.hasOwnProperty.call(french, key)) return french[key];
    const ipa =
      (Object.prototype.hasOwnProperty.call(lbIpaMap, key) &&
        filterIpa(lbIpaMap[key], word, "lb")) ||
      undefined;
    // The map holds French IPA with ɑ̃ already as ɑn/ɑm, so it gets frIpa's velarA here
    return ipa && velarA ? ipa.replace(/ɑ[nm](?![aɑeɛəiɪoɔuʊyøœ])/g, "ɑŋ") : ipa;
  };

  const convert = (text: string) =>
    convertWithExceptions(text, "lb", exception, text => transliterator.transliterate(text));

  if (typeof text === "string") {
    return convert(text) as T;
  } else {
    return text.map(convert) as T;
  }
};
