import { Text } from "types";

export const faVi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { faIpa } = await import("converters/fa/fa-ipa");
  const { ipaViRules } = await import("data/ipa-vi.rules");

  const transliterator = RBT.fromRules(ipaViRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await faIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await faIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
