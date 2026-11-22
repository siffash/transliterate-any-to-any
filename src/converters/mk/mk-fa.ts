import { Text } from "types";

export const mkFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mkIpaRules } = await import("data/mk/mk-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(
    mkIpaRules + ipaDevoiceVRules + ipaFaInitialARules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
