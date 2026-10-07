import { Text } from "types";

export const svTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { svIpaRules } = await import("data/sv/sv-ipa.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(svIpaRules + ipaThRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
