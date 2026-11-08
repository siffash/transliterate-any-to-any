import { Text } from "types";

export const bgTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");
  const { ipaThKaranRules } = await import("data/ipa/ipa-th_karan.rules");

  const transliterator = RBT.fromRules(bgIpaRules + ipaThOpenRules + ipaThRules + ipaThKaranRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
