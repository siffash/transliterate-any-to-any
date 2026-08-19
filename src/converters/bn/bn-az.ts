import { Text } from "types";

export const bnAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn/bn-ipa.rules");
  const { ipaAzRules } = await import("data/ipa/ipa-az.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaAzRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
