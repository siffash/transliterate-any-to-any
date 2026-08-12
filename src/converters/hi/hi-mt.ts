import { Text } from "types";

export const hiMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("constants/hi-ipa.rules");
  const { ipaMtRules } = await import("constants/ipa-mt.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaMtRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
