import { Text } from "types";

export const hiMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaMsRules } = await import("data/ipa/ipa-ms.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaMsRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
