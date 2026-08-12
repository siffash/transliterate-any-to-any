import { Text } from "types";

export const zhCa = async (text: Text) => {
  const { toIPA } = require("phonemize/all");
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaCaRules } = await import("data/ipa-ca.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaCaRules + "::Title;");

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
