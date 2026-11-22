import { Text } from "types";

export const caKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { caLatnRuSRules } = await import("data/ca/ca-latn_ru-s.rules");

  const transliterator = RBT.fromRules(caLatnRuSRules + caLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
