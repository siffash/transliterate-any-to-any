import { Text } from "types";

export const skJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhJaRules } = await import("data/ipa/cs_sk-ipa_rzh-ja.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(skIpaRules + csSkIpaRzhJaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
