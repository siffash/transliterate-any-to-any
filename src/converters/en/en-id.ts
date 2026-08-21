import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  const transliterator = RBT.fromRules(ipaIdRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
