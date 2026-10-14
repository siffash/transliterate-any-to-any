import { Text } from "types";

export const enNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { enIpa } = await import("converters/en/en-ipa");
  const { ipaNoRules } = await import("data/ipa/ipa-no.rules");
  const { copyCase } = await import("helpers/copyCase");

  const transliterator = RBT.fromRules(ipaNoRules);

  if (typeof text === "string") {
    const ipa = await enIpa<string>(text);
    return copyCase(text, transliterator.transliterate(ipa), "no");
  } else {
    const ipaArray = await enIpa<string[]>(text);
    return ipaArray.map((ipa, i) => copyCase(text[i], transliterator.transliterate(ipa), "no"));
  }
};
