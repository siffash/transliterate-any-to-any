import { Text } from "types";

export const bnIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaItRules } = await import("constants/ipa-it.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaItRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
