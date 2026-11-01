import { Text } from "types";

export const skHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { csSkIpaRzhRules } = await import("data/ipa/cs_sk-ipa_rzh.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(skIpaRules + csSkIpaRzhRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
