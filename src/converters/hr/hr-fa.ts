import { Text } from "types";

export const hrFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");
  const { ipaFaODropRules } = await import("data/ipa/ipa-fa_o-drop.rules");

  const transliterator = RBT.fromRules(
    hrIpaRules + ipaFaInitialARules + ipaFaNjRules + ipaFaODropRules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
