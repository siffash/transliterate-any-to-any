import { Text } from "types";

export const enEl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { syllabicLeRestoreRules } = await import("helpers/normalizeEnIpa");
  const { enIpaElRules } = await import("data/en/en-ipa_el.rules");
  const { ipaElRules } = await import("data/ipa/ipa-el.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(enIpaElRules + ipaElRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text, syllabicLeRestoreRules);
    return copyCase(text, transliterator.transliterate(ipa), "el");
  } else {
    const ipaArray = await enIpa<string[]>(text, syllabicLeRestoreRules);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "el"));
  }
};
