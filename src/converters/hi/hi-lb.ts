import { Text } from "types";

export const hiLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaLbRules } = await import("constants/ipa-lb.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaLbRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
