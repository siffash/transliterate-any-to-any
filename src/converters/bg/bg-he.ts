import { Text } from "types";

export const bgHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
