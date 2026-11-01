import { Text } from "types";

export const skAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhArRules } = await import("data/ipa/cs_sk-ipa_rzh-ar.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(skIpaRules + csSkIpaRzhArRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
