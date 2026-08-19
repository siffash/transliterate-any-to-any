import { Text } from "types";

export const skFa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skIpaRules } = await import("data/sk/sk-ipa.rules");
  const { ipaFaRules } = await import("data/ipa/ipa-fa.rules");

  const transliterator = RBT.fromRules(skIpaRules + ipaFaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
