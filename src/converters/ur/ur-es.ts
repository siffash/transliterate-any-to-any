import { Text } from "types";

export const urEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaEsRules } = await import("constants/ipa-es.rules");

  const transliterator = RBT.fromRules(ipaEsRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
