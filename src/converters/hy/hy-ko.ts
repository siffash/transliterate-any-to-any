import { Text } from "types";

export const hyKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyIpaRules } = await import("data/hy/hy-ipa.rules");
  const { hyIpaSchwaRules } = await import("data/hy/hy-ipa_schwa.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    hyIpaRules + hyIpaSchwaRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
