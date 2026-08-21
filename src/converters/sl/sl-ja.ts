import { Text } from "types";

export const slJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
