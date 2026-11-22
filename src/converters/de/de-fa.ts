import { Text } from "types";

export const deFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deIpaRules } = await import("data/de/de-ipa.rules");
  const { ipaErRules } = await import("data/ipa/ipa_er.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { deIpaFaRules } = await import("data/de/de-ipa_fa.rules");

  const transliterator = RBT.fromRules(
    deIpaRules + ipaErRules + ipaFaInitialARules + ipaFaOeRules + deIpaFaRules + ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
