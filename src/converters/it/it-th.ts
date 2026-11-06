import { Text } from "types";

export const itTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itIpaRules } = await import("data/it/it-ipa.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThOpenIRules } = await import("data/ipa/ipa-th_open-i.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(itIpaRules + ipaThOpenRules + ipaThOpenIRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
