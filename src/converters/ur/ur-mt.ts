import { Text } from "types";

export const urMt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaMtRules } = await import("constants/ipa-mt.rules");

  const transliterator = RBT.fromRules(ipaMtRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
