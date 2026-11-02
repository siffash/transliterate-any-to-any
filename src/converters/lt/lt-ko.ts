import { Text } from "types";

export const ltKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ltIpaKoIaRules } = await import("data/lt/lt-ipa_ko-ia.rules");
  const { ltIpaRules } = await import("data/lt/lt-ipa.rules");
  const { ltIpaKoRules } = await import("data/lt/lt-ipa_ko.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    ltIpaKoIaRules + ltIpaRules + ltIpaKoRules + ipaKoFinalKpRules + ipaKoRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
