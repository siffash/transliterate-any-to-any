import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaItRules } = await import("data/ipa/ipa-it.rules");

  const transliterator = RBT.fromRules(ipaItRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, true);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text, true);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
