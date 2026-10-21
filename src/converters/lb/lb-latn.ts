import { Text } from "types";

export const lbLatn = async <T = Text>(text: Text): Promise<T> => {
  const { lbIpaMap } = await import("data/lb/lb-ipa.map");
  const { RBT } = await import("helpers/rbt");
  const { lbLatnRules } = await import("data/lb/lb-latn.rules");
  const { ipaLatnRules } = await import("data/ipa/ipa-latn.rules");
  const { convertWithExceptions } = await import("helpers/convertWithExceptions");
  const { filterIpa } = await import("helpers/filterIpa");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(lbLatnRules);
  const ipaTransliterator = RBT.fromRules(ipaLatnRules);

  const exception = (word: string) => {
    const key = word.normalize("NFC").toLocaleLowerCase("lb");
    const ipa =
      Object.prototype.hasOwnProperty.call(lbIpaMap, key) && filterIpa(lbIpaMap[key], word, "lb");
    return ipa ? copyCase(word, ipaTransliterator.transliterate(ipa), "lb") : undefined;
  };

  const convert = (text: string) =>
    convertWithExceptions(text, "lb", exception, text => transliterator.transliterate(text));

  if (typeof text === "string") {
    return convert(text) as T;
  } else {
    return text.map(convert) as T;
  }
};
