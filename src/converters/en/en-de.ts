import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaDeRules } = await import("data/ipa/ipa-de.rules");

  const transliterator = RBT.fromRules(ipaDeRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
