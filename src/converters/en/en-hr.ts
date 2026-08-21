import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  const transliterator = RBT.fromRules(ipaHrRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
