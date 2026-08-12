import { Text } from "types";

export const zhHy = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaHyRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "zh", text => toIPA(text, { separator: "" }));
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
