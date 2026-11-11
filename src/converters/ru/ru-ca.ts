import { Text } from "types";

export const ruCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnLNRules + latnCaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
