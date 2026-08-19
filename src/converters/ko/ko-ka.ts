import { Text } from "types";

export const koKa = async (text: Text) => {
  const { getPhonemizeAll } = await import("helpers/getPhonemize");
  const { toIPA } = await getPhonemizeAll();
  const { filterIpa } = await import("helpers/filterIpa");
  const { RBT } = await import("helpers/rbt-distributor");
  const { ipaKaRules } = await import("data/ipa/ipa-ka.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");

  const transliterator = RBT.fromRules(ipaKaRules);

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
