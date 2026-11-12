import { Text } from "types";

export const kkEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { kkLatnJeRules } = await import("data/kk/kk-latn_je.rules");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  const transliterator = RBT.fromRules(kkLatnJeRules + kkLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
