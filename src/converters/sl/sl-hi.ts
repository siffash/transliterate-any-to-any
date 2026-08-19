import { Text } from "types";

export const slHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slIpaRules } = await import("data/sl/sl-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(slIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
