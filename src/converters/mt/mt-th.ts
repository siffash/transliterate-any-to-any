import { Text } from "types";

export const mtTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { mtIpaRules } = await import("data/mt/mt-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(mtIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
