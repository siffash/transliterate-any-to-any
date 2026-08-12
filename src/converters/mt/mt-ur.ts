import { Text } from "types";

export const mtUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { mtIpaRules } = await import("constants/mt-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
