import { Text } from "types";

export const koPl = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaPlRules } = await import("data/ipa-pl.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaPlRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "ko", text =>
      filterIpa(toIPA(text, { anyAscii: true }), text, "ko"),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
