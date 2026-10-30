import { Text } from "types";

export const thTg = async (text: Text) => {
  const { thRtgs } = await import("converters/th/th-ipa");
  const { RBT } = await import("helpers/rbt");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKxRules } = await import("data/th/th-latn_kx.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeTh } = await import("helpers/normalizeTh");

  const toRtgs = await thRtgs();
  const transliterator = RBT.fromRules(
    thLatnRules + thLatnKxRules + thLatnTRules + latnTgRules + "::Title;",
  );

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
