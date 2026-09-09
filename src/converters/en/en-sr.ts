import { Text } from "types";
import { copyCase } from "helpers/copyCase";

export const enSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaSrRules } = await import("data/ipa/ipa-sr.rules");

  const transliterator = RBT.fromRules(ipaSrRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa));
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa)));
  }
};
