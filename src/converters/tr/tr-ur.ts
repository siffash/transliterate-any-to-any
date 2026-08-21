import { Text } from "types";

export const trUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trIpaRules } = await import("data/tr/tr-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(trIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
