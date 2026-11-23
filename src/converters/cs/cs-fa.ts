import { Text } from "types";

export const csFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhRRules } = await import("data/ipa/cs_sk-ipa_rzh-r.rules");
  const { csIpaFaRules } = await import("data/cs/cs-ipa_fa.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");
  const { csIpaFaChRules } = await import("data/cs/cs-ipa_fa-ch.rules");

  const transliterator = RBT.fromRules(
    csIpaFaRules +
      csIpaHardERules +
      csIpaHardIRules +
      csIpaRules +
      csSkIpaRzhRRules +
      csIpaFaChRules +
      ipaFaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
