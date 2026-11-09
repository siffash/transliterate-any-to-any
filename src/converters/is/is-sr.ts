import { Text } from "types";

export const isSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnUeRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
