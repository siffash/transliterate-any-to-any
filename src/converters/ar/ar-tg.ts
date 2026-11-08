import { Text } from "types";

export const arTg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { arIpaTgRules } = await import("data/ar/ar-ipa_tg.rules");
  const { arFaUrIpaTgRules } = await import("data/ipa/ar_fa_ur-ipa_tg.rules");
  const { ipaTgRules } = await import("data/ipa/ipa-tg.rules");

  const transliterator = RBT.fromRules(
    arIpaTgRules + arFaUrIpaTgRules + ipaTgRules + "::Title;" + arLowerRules,
  );

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
