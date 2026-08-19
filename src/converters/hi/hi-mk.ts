import { Text } from "types";

export const hiMk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaMkRules } = await import("data/ipa/ipa-mk.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaMkRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
