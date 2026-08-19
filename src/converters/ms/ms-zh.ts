import { Text } from "types";

export const msZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaZhRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
