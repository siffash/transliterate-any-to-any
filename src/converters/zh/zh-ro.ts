import { Text } from "types";

export const zhRo = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaRoRules } = await import("data/ipa/ipa-ro.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaRoRules + "::Title;");

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
