import { Text } from "types";

export const bgAr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { bgIpaRules } = await import("data/bg/bg-ipa.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { ipaArRules } = await import("data/ipa/ipa-ar.rules");

  const transliterator = RBT.fromRules(bgIpaRules + latnXHRules + ipaArRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
