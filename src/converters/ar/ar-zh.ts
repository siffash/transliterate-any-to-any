import { Text } from "types";

export const arZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { arZhRules } = await import("data/ar/ar-zh.rules");
  const { arIpa } = await import("converters/ar/ar-ipa");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");
  const { ipaZhTiRules } = await import("data/ipa/ipa-zh_ti.rules");

  const transliterator = RBT.fromRules(arZhRules + ipaGemRules + ipaZhTiRules + ipaZhRules);

  if (typeof text === "string") {
    const ipa = await arIpa<string>(text, { dropLoneArticle: "all" });
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await arIpa<string[]>(text, { dropLoneArticle: "all" });
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
