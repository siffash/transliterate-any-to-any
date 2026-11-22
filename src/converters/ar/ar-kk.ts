import { Text } from "types";

export const arKk = async (text: Text) => {
  const { kkHRules } = await import("data/kk/kk_h.rules");
  const { RBT } = await import("helpers/rbt");
  const { ipaGemDRules } = await import("data/ipa/ipa_gemd.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { arKkRules } = await import("data/ar/ar-kk.rules");
  const { arLowerRules } = await import("data/ar/ar_lower.rules");
  const { ipaKkRules } = await import("data/ipa/ipa-kk.rules");

  const transliterator = RBT.fromRules(
    ipaGemDRules + ipaKkRules + arKkRules + "::Title;" + arLowerRules + kkHRules,
  );

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text, { dropLoneArticle: true });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text, { dropLoneArticle: true });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
