import { Text } from "types";

export const koFi = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaFiRules } = await import("constants/ipa-fi.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaFiRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text => toIPA(text, { anyAscii: true }));
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
