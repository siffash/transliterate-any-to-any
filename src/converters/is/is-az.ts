import { Text } from "types";

export const isAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnBRules } = await import("data/is/is-latn_b.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");

  const transliterator = RBT.fromRules(isLatnBRules + isLatnURules + isLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
