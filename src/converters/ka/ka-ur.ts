import { Text } from "types";

export const kaUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaIpaRules } = await import("constants/ka-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(kaIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
