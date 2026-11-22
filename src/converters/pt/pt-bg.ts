import { Text } from "types";

export const ptBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { ptLatnDiphthongIRules } = await import("data/pt/pt-latn_diphthong-i.rules");
  const { ptLatnFinalSRules } = await import("data/pt/pt-latn_final-s.rules");

  const transliterator = RBT.fromRules(
    ptLatnDiphthongIRules + ptLatnRules + ptLatnFinalSRules + latnBgRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
