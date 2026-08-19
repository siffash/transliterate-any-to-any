import { Text } from "types";

export const srUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { srIpaRules } = await import("data/sr/sr-ipa.rules");
  const { ipaUrRules } = await import("data/ipa/ipa-ur.rules");

  const transliterator = RBT.fromRules(srIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
