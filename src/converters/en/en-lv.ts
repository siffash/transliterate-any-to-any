import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enLv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaLvRules } = await import("data/ipa/ipa-lv.rules");

  const transliterator = RBT.fromRules(ipaLvRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
