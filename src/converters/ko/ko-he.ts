import { Text } from "types";

export const koHe = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaHeRules } = await import("data/ipa-he.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaHeRules);

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
