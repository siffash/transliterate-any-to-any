import { Text } from "types";

export const hyKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
