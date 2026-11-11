import { Text } from "types";

export const koEs = async (text: Text) => {
  const Aromanize = (await import("aromanize")).default;
  const { RBT } = await import("helpers/rbt");
  const { latnKoHyphenRules } = await import("data/latn/latn_ko-hyphen.rules");
  const { koLatnAssimRules } = await import("data/ko/ko-latn_assim.rules");
  const { koLatnRules } = await import("data/ko/ko-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnShSRules } = await import("data/latn/latn_sh-s.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");
  const { wordSplitter } = await import("helpers/wordSplitter");
  const { normalizeKo } = await import("helpers/normalizeKo");

  const transliterator = RBT.fromRules(
    koLatnAssimRules + koLatnRules + latnIRules + latnShSRules + latnEsRules + latnKoHyphenRules,
  );

  const convert = async (text: string) => {
    const romanized = await wordSplitter(text, "ko", text =>
      normalizeKo(text, text => Aromanize.romanize(text), "latn", { syllable: "‧", unit: "‧" }),
    );
    return transliterator.transliterate(romanized);
  };

  if (typeof text === "string") {
    return await convert(text);
  } else {
    return Promise.all(text.map(convert));
  }
};
