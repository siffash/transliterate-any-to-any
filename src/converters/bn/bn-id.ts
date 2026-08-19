import { Text } from "types";

export const bnId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaIdRules } = await import("data/ipa/ipa-id.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaIdRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
