import { Text } from "types";

export const roUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roIpaRules } = await import("data/ro/ro-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrInitialARules } = await import("data/ipa/ipa-ur_initial-a.rules");
  const { ipaFinalPalatalIRules } = await import("data/ipa/ipa_final-palatal-i.rules");

  const transliterator = RBT.fromRules(
    roIpaRules + ipaUrInitialARules + ipaFinalPalatalIRules + ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
