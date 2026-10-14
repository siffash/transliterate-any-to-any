import { Text } from "types";

export const enLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaLtRules } = await import("data/ipa/ipa-lt.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaLtRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "lt");
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "lt"));
  }
};
