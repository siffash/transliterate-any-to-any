import { Text } from "types";

export const koHy = async (text: Text) => {
  const { phonemize } = require("phonemize/all");
  const { RBT } = await import("icu-transliterator");
  const { ipaHyRules } = await import("constants/ipa-hy.rules");

  const transliterator = RBT.fromRules(ipaHyRules + "::Title;");

  const convert = (text: string) => {
    const ipa = phonemize(text, { anyAscii: true });
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return convert(text);
  } else {
    return text.map(convert);
  }
};
