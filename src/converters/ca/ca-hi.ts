import { Text } from "types";

export const caHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caIpaRules } = await import("data/ca/ca-ipa.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(caIpaRules + ipaHiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
