import { Text } from "types";

export const bgUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgIpaRules } = await import("constants/bg-ipa.rules");
  const { ipaUrRules } = await import("constants/ipa-ur.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
