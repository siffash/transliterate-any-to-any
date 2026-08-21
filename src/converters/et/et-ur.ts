import { Text } from "types";

export const etUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etIpaRules } = await import("data/et/et-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(etIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
