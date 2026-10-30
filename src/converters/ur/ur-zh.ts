import { Text } from "types";

export const urZh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ipaGemRules } = await import("data/ipa/ipa_gem.rules");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaZhFaiRules } = await import("data/ipa/ipa-zh_fai.rules");
  const { ipaZhRules } = await import("data/ipa/ipa-zh.rules");

  const transliterator = RBT.fromRules(ipaGemRules + ipaZhFaiRules + ipaZhRules);

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
