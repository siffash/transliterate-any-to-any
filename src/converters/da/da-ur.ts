import { Text } from "types";

export const daUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { daIpaRules } = await import("data/da/da-ipa.rules");
  const { ipaUrErRules } = await import("data/ipa/ipa-ur_er.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(daIpaRules + ipaUrErRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
