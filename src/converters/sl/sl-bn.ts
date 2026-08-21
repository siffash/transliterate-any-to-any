import { Text } from "types";

export const slBn = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaBnRules } = await import("data/ipa/ipa-bn.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaBnRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
