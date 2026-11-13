import { Text } from "types";

export const trLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnHRules } = await import("data/tr/tr-latn_h.rules");
  const { trLatnIyaRules } = await import("data/tr/tr-latn_iya.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(
    trLatnHRules + trLatnRules + trLatnIyaRules + latnIRules + latnLtRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
