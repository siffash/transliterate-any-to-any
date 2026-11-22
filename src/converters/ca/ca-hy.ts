import { Text } from "types";

export const caHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { caLatnDiphthongIRules } = await import("data/ca/ca-latn_diphthong-i.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { caLatnRuSRules } = await import("data/ca/ca-latn_ru-s.rules");

  const transliterator = RBT.fromRules(
    caLatnDiphthongIRules + caLatnRuSRules + caLatnRules + latnHyRules + hyEvRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
