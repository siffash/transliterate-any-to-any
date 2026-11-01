import { Text } from "types";

export const csTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhThRules } = await import("data/ipa/cs_sk-ipa_rzh-th.rules");
  const { csIpaHardERules } = await import("data/cs/cs-ipa_hard-e.rules");
  const { csIpaHardIRules } = await import("data/cs/cs-ipa_hard-i.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(
    csIpaHardERules + csIpaHardIRules + csIpaRules + csSkIpaRzhThRules + ipaThRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
