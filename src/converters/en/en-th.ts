import { Text } from "types";

export const enTh = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { enIpaThRules } = await import("data/en/en-ipa_th.rules");
  const { ipaThRules } = await import("data/ipa/ipa-th.rules");

  const transliterator = RBT.fromRules(enIpaThRules + ipaThRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return transliterator.transliterate(ipa);
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map(ipa => transliterator.transliterate(ipa));
  }
};
