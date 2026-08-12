import { Text } from "types";

export const skUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skIpaRules } = await import("data/sk-ipa.rules");
  const { ipaUrRules } = await import("data/ipa-ur.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
