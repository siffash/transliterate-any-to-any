import { Text } from "types";

export const hiHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hiIpaGemHuRules } = await import("data/hi/hi-ipa_gemhu.rules");
  const { hiIpaShortEoRules } = await import("data/hi/hi-ipa_short-eo.rules");
  const { hiIpaShortFinalARules } = await import("data/hi/hi-ipa_short-final-a.rules");
  const { hiIpaShortFinalIRules } = await import("data/hi/hi-ipa_short-final-i.rules");
  const { hiIpaRules } = await import("data/hi/hi-ipa.rules");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaHuRules } = await import("data/ipa/ipa-hu.rules");

  const transliterator = RBT.fromRules(
    hiIpaRules +
      hiIpaShortEoRules +
      hiIpaShortFinalARules +
      hiIpaShortFinalIRules +
      hiIpaGemHuRules +
      ipaAspHRules +
      ipaHuRules +
      "::Title;",
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
