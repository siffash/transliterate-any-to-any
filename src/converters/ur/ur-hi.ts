import { Text } from "types";

export const urHi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { urIpa } = await import("converters/ur/ur-ipa");
  const { urIpaHiRules } = await import("data/ur/ur-ipa_hi.rules");
  const { ipaHiRules } = await import("data/ipa/ipa-hi.rules");

  const transliterator = RBT.fromRules(urIpaHiRules + ipaHiRules);

  if (typeof text === "string") {
    const ipa = await urIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await urIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
