import { Text } from "types";

export const isMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { isLatnGRules } = await import("data/is/is-latn_g.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(isLatnRules + isLatnGRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
