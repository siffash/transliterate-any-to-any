import { Text } from "types";

export const hiHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemHuRules } = await import("data/hi/hi-ipa_gemhu.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { hiIpaHRules } = await import("data/hi/hi-ipa_h.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules + hiIpaGemHuRules + hiIpaHRules + ipaHuRules + "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
