import { Text } from "types";

export const koKa = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaKaRules } = await import("constants/ipa-ka.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaKaRules);

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
