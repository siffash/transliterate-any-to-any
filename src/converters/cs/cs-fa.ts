import { Text } from "types";

export const csFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { ipaDevoiceVRules } = await import("data/ipa/ipa_devoice-v.rules");
  const { csSkIpaRzhKoRules } = await import("data/ipa/cs_sk-ipa_rzh-ko.rules");
  const { csIpaFaRules } = await import("data/cs/cs-ipa_fa.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(
    csIpaFaRules +
      csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      ipaDevoiceVRules +
      csSkIpaRzhKoRules +
      ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
