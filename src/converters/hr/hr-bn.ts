import { Text } from "types";

export const hrBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hrIpaRules } = await import("data/hr/hr-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(hrIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
