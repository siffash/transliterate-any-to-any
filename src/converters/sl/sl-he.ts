import { Text } from "types";

export const slHe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaHeRules } = await import("data/ipa/ipa-he.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaHeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
