import { Text } from "types";

export const csJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { csIpaRules } = await import("data/cs/cs-ipa.rules");
  const { csSkIpaRzhJaRules } = await import("data/ipa/cs_sk-ipa_rzh-ja.rules");
  const { csIpaLabialERules } = await import("data/cs/cs-ipa_labial-e.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(
    csIpaLabialERules + csIpaRules + csSkIpaRzhJaRules + ipaJaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
