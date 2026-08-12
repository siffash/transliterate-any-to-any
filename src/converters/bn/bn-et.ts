import { Text } from "types";

export const bnEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("constants/bn-ipa.rules");
  const { ipaEtRules } = await import("constants/ipa-et.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaEtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
