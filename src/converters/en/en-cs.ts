import { Text } from "types";

export const enCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { ipaCsRules } = await import("data/ipa/ipa-cs.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaCsRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "cs");
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "cs"));
  }
};
