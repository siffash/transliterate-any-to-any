import { Text } from "types";

export const koEt = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaEtRules } = await import("constants/ipa-et.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaEtRules + "::Title;");

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
