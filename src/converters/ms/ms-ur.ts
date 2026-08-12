import { Text } from "types";

export const msUr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIpaRules } = await import("data/ms-ipa.rules");
  const { ipaUrRules } = await import("data/ipa-ur.rules");

  const transliterator = RBT.fromRules(msIpaRules + ipaUrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
