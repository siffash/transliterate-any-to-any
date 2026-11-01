import { Text } from "types";

export const enMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaAeRules } = await import("data/en/en-ipa_ae.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaAeRules + ipaMkRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "mk");
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "mk"));
  }
};
