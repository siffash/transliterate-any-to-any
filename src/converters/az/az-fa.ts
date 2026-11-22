import { Text } from "types";

export const azFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azIpaRules } = await import("data/az/az-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { azLatnQRules } = await import("data/az/az-latn_q.rules");
  const { ipaUnroundedIRules } = await import("data/ipa/ipa_unrounded-i.rules");
  const { ipaFaOeRules } = await import("data/ipa/ipa-fa_oe.rules");
  const { azIpaFaRules } = await import("data/az/az-ipa_fa.rules");
  const { azFaMammadRules } = await import("data/az/az-fa_mammad.rules");

  const transliterator = RBT.fromRules(
    azLatnQRules +
      azIpaRules +
      azIpaFaRules +
      ipaUnroundedIRules +
      ipaDevoiceVRules +
      ipaFaOeRules +
      ipaFaRules +
      azFaMammadRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
