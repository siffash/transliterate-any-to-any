import { Text } from "types";

export const hyKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyIpaRules } = await import("constants/hy-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(hyIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
