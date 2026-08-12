import { Text } from "types";

export const hrFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hrIpaRules } = await import("data/hr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa-fa.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
