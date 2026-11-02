import { Text } from "types";

export const kkUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkIpaRules } = await import("data/kk/kk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(kkIpaRules + ipaDevoiceVRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
