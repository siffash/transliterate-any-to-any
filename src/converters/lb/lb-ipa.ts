import { Text } from "types";

export const lbIpa = async <T = Text>(
  text: Text,
  velarA = false,
  mapIpa?: Record<string, string>,
): Promise<T> => {
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { convertWithExceptions } = await import("helpers/convertWithExceptions");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(lbIpaRules);

  const exception = (word: string) => {
    const key = word.normalize("NFC").toLocaleLowerCase("lb");
    // A target that reads French words its own way (ja) passes their IPA in mapIpa
    if (mapIpa && Object.prototype.hasOwnProperty.call(mapIpa, key)) return mapIpa[key];
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
