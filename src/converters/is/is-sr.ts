import { Text } from "types";

export const isSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { isLatnSrRules } = await import("data/is/is-latn_sr.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");

  const transliterator = RBT.fromRules(
    isLatnBRules + isLatnURules + isLatnRules + isLatnSrRules + latnSrRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
