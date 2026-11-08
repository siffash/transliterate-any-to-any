import { Text } from "types";

export const huTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huIpaRules } = await import("data/hu/hu-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(huIpaRules + ipaThOpenRules + ipaThRules + ipaThKaranRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
