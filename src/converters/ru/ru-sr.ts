import { Text } from "types";

export const ruSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnYjIRules } = await import("data/latn/latn_yj-i.rules");
  const { latnIjIRules } = await import("data/latn/latn_ij-i.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnYjIRules + latnIjIRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
