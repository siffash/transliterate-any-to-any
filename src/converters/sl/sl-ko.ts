import { Text } from "types";

export const slKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaKoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
