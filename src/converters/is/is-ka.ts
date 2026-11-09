import { Text } from "types";

export const isKa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  const transliterator = RBT.fromRules(isLatnDlRules + isLatnRules + latnKaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
