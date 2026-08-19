import { Text } from "types";

export const hiHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaHrRules } = await import("data/ipa/ipa-hr.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaHrRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
