import { Text } from "types";

export const ukBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukIpaRules } = await import("data/uk/uk-ipa.rules");
  const { ukIpaVRules } = await import("data/uk/uk-ipa_v.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ukIpaVRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
