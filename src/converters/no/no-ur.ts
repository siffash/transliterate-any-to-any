import { Text } from "types";

export const noUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noIpaRules } = await import("constants/no-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(noIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
