import { Text } from "types";

export const lbIpa = async <T = Text>(
  text: Text,
  velarA = false,
  frenchIpa?: (words: string[]) => Promise<string[]>,
  rules = "",
): Promise<T> => {
  const { mapText } = await import("helpers/convertText");
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
    return ipa && velarA ? ipa.replace(/ɑ[nm](?![aɑeɛəiɪoɔuʊyøœ])/g, "ɑŋ") : ipa;
  };

  const convert = (text: string) =>
    convertWithExceptions(text, "lb", exception, text => transliterator.transliterate(text));

  return (await mapText(text, convert)) as T;
};
