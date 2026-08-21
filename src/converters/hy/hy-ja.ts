import { Text } from "types";

export const hyJa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaJaRules } = await import("data/ipa/ipa-ja.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaJaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
