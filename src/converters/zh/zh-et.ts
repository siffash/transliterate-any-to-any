import { Text } from "types";

export const zhEt = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaEtRules } = await import("constants/ipa-et.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaEtRules + "::Title;");

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
