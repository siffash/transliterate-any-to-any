import { Text } from "types";

export const thMs = async (text: Text) => {
  const { thRtgs } = await import("converters/th/th-ipa");
  const { RBT } = await import("helpers/rbt");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toRtgs = await thRtgs();
  const transliterator = RBT.fromRules(thLatnRules + thLatnTRules + latnMsRules + "::Title;");

  const convert = async (text: string) => {
    const romanized = await wordSplitter(normalizeTh(text), "th", text =>
      text.replace(/[^๐-๙]+/g, part => toRtgs(part)),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
