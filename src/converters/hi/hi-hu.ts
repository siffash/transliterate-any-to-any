import { Text } from "types";

export const hiHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaHuRules } = await import("constants/ipa-hu.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaHuRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
