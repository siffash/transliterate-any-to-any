import { Text } from "types";

export const slAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slIpaRules } = await import("constants/sl-ipa.rules");
  const { ipaArRules } = await import("constants/ipa-ar.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
