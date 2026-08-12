import { Text } from "types";

export const zhUr = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaUrRules } = await import("data/ipa-ur.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaUrRules);

  const convert = async (text: string) => {
    const ipa = await wordSplitter(text, "zh", text => filterIpa(toIPA(text, { separator: "" })));
    return transliterator.transliterate(ipa);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
