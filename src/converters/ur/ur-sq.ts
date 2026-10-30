import { Text } from "types";

export const urSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { ipaAspHRules } = await import("data/ipa/ipa_asph.rules");
  const { ipaSqRules } = await import("data/ipa/ipa-sq.rules");

  const transliterator = RBT.fromRules(ipaAspHRules + ipaSqRules + "::Title;");

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
