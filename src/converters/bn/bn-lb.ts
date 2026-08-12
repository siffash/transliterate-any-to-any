import { Text } from "types";

export const bnLb = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bnIpaRules } = await import("data/bn-ipa.rules");
  const { ipaLbRules } = await import("data/ipa-lb.rules");

  const transliterator = RBT.fromRules(bnIpaRules + ipaLbRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
