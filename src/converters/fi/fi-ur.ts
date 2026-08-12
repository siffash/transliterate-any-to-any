import { Text } from "types";

export const fiUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiIpaRules } = await import("constants/fi-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(fiIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
