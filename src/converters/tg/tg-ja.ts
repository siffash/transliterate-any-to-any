import { Text } from "types";

export const tgJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { tgIpaRules } = await import("data/tg/tg-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(tgIpaRules + ipaDevoiceVRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
