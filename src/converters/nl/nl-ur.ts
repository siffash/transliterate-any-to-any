import { Text } from "types";

export const nlUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlIpaRules } = await import("data/nl/nl-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFinalSchwaERules } = await import("data/ipa/ipa_final-schwa-e.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");
  const { ipaUrRetroflexRules } = await import("data/ipa/ipa-ur_retroflex.rules");
  const { nlIpaGRules } = await import("data/nl/nl-ipa_g.rules");
  const { ipaArEDropRules } = await import("data/ipa/ipa-ar_e-drop.rules");

  const transliterator = RBT.fromRules(
    nlIpaRules +
      ipaDevoiceVRules +
      ipaFinalSchwaERules +
      nlIpaGRules +
      ipaUrRetroflexRules +
      ipaArEDropRules +
      ipaUrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
