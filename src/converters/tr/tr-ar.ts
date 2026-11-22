import { Text } from "types";

export const trAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");
  const { trLatnGhRules } = await import("data/tr/tr-latn_gh.rules");

  const transliterator = RBT.fromRules(
    trLatnGhRules + trIpaRules + ipaUnroundedIRules + ipaArEDropRules + ipaArRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
