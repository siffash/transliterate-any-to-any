import { Text } from "types";

export const lbKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { lbIpa } = await import("converters/lb/lb-ipa");
  const { lbIpaDevoiceRules } = await import("data/lb/lb-ipa_devoice.rules");
  const { ipaDevoiceBgRules } = await import("data/ipa/ipa_devoice-bg.rules");
  const { ipaKoEzhRules } = await import("data/ipa/ipa-ko_ezh.rules");
  const { ipaKoFinalKpRules } = await import("data/ipa/ipa-ko_final-kp.rules");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoEzhRules + ipaKoFinalKpRules + ipaKoRules);

  if (typeof text === "string") {
    const ipa = await lbIpa<string>(text, false, undefined, lbIpaDevoiceRules + ipaDevoiceBgRules);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await lbIpa<string[]>(
      text,
      false,
      undefined,
      lbIpaDevoiceRules + ipaDevoiceBgRules,
    );
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
