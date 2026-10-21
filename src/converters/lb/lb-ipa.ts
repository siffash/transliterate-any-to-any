import { Text } from "types";

export const lbIpa = async <T = Text>(text: Text): Promise<T> => {
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { lbIpaRules } = await import("data/lb/lb-ipa.rules");
  const { convertWithExceptions } = await import("helpers/convertWithExceptions");
  const { filterIpa } = await import("helpers/filterIpa");

  const transliterator = RBT.fromRules(lbIpaRules);

  const exception = (word: string) => {
    const key = word.normalize("NFC").toLocaleLowerCase("lb");
    return (
      (Object.prototype.hasOwnProperty.call(lbIpaMap, key) &&
        filterIpa(lbIpaMap[key], word, "lb")) ||
      undefined
    );
  };

  const convert = (text: string) =>
    convertWithExceptions(text, "lb", exception, text => transliterator.transliterate(text));

  if (typeof text === "string") {
    return convert(text) as T;
  } else {
    return text.map(convert) as T;
  }
};
