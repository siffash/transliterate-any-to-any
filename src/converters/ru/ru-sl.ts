import { Text } from "types";

export const ruSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");
  const { latnLNFinalRules } = await import("data/latn/latn_l-n-final.rules");

  const transliterator = RBT.fromRules(
    ruLatnRules + latnSeparatorRules + latnIjRules + latnLNFinalRules + latnSlRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
