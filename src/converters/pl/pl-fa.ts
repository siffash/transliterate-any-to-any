import { Text } from "types";

export const plFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plIpaRules } = await import("data/pl/pl-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { plIpaFaRules } = await import("data/pl/pl-ipa_fa.rules");
  const { ipaFaNjVRules } = await import("data/ipa/ipa-fa_nj-v.rules");

  const transliterator = RBT.fromRules(
    plIpaRules + plIpaFaRules + ipaFaInitialARules + ipaFaNjVRules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
