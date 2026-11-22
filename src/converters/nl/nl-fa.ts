import { Text } from "types";

export const nlFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { nlIpaXRules } = await import("data/nl/nl-ipa_x.rules");
  const { ipaFaInitialARules } = await import("data/ipa/ipa-fa_initial-a.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { nlIpaFaUiRules } = await import("data/nl/nl-ipa_fa-ui.rules");

  const transliterator = RBT.fromRules(
    nlIpaRules +
      ipaDevoiceVRules +
      nlIpaXRules +
      ipaFaInitialARules +
      nlIpaFaUiRules +
      ipaFaOeRules +
      ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
