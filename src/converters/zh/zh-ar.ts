import { Text } from "types";

export const zhAr = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaArRules } = await import("constants/ipa-ar.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaArRules);

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
