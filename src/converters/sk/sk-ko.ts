import { Text } from "types";

export const skKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skIpaRules } = await import("constants/sk-ipa.rules");
  const { ipaKoRules } = await import("constants/ipa-ko.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
