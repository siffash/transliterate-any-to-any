import { Text } from "types";

export const roUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roIpaRules } = await import("data/ro-ipa.rules");
  const { ipaUrRules } = await import("data/ipa-ur.rules");

  const transliterator = RBT.fromRules(roIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
