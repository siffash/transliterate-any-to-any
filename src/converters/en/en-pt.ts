import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enPt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaPtRules } = await import("data/ipa/ipa-pt.rules");

  const transliterator = RBT.fromRules(ipaPtRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
