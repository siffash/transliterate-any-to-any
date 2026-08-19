import { Text } from "types";

export const msHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("data/ms/ms-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
