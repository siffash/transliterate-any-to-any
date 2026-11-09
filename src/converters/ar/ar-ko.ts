import { Text } from "types";

export const arKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoHyphenCcRules } = await import("data/ipa/ipa-ko_hyphen-cc.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(
    ipaKoFinalKpRules + ipaKoHyphenCcRules + ipaKoRules + "::Title;",
  );

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
