import { Text } from "types";

export const zhSq = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaSqRules } = await import("data/ipa-sq.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaSqRules + "::Title;");

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "zh", text =>
      filterIpa(toIPA(text, { separator: "" }), text, "zh"),
    );
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
