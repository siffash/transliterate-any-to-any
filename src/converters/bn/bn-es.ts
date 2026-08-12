import { Text } from "types";

export const bnEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaEsRules } = await import("constants/ipa-es.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaEsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
