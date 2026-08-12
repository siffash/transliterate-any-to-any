import { Text } from "types";

export const msHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("data/ms-ipa.rules");
  const { ipaHiRules } = await import("data/ipa-hi.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
