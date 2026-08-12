import { Text } from "types";

export const urAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAzRules } = await import("constants/ipa-az.rules");

  const transliterator = RBT.fromRules(ipaAzRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
