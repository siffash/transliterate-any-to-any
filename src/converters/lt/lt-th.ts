import { Text } from "types";

export const ltTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ltIpaThRules } = await import("data/lt/lt-ipa_th.rules");
  const { ipaThOpenRules } = await import("data/ipa/ipa-th_open.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(ltIpaRules + ltIpaThRules + ipaThOpenRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
