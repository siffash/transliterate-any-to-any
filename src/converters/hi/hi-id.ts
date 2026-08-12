import { Text } from "types";

export const hiId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiIpaRules } = await import("data/hi-ipa.rules");
  const { ipaIdRules } = await import("data/ipa-id.rules");

  const transliterator = RBT.fromRules(hiIpaRules + ipaIdRules + "::Title;");

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
