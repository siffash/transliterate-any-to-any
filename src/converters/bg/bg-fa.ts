import { Text } from "types";

export const bgFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { bgIpaFaRules } = await import("data/bg/bg-ipa_fa.rules");
  const { bgFaOvoRules } = await import("data/bg/bg-fa_ovo.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(
    bgIpaRules + bgIpaFaRules + ipaFaInitialARules + ipaFaRules + bgFaOvoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
