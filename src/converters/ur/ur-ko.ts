import { Text } from "types";

export const urKo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaKoRules } = await import("data/ipa/ipa-ko.rules");

  const transliterator = RBT.fromRules(ipaKoRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
