import { Text } from "types";

export const ukUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukIpaRules } = await import("constants/uk-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(ukIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
