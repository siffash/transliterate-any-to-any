import { Text } from "types";

export const hiBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaBgRules } = await import("data/ipa/ipa-bg.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaBgRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
