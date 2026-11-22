import { Text } from "types";

export const itFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaWURules } = await import("data/ipa/ipa_w-u.rules");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { itIpaFaRules } = await import("data/it/it-ipa_fa.rules");
  const { ipaFaNjRules } = await import("data/ipa/ipa-fa_nj.rules");

  const transliterator = RBT.fromRules(
    itIpaRules + itIpaFaRules + ipaWURules + ipaFaInitialARules + ipaFaNjRules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
