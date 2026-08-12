import { Text } from "types";

export const plUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plIpaRules } = await import("constants/pl-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(plIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
