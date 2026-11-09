import { Text } from "types";

export const isBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(isLatnTlRules + isLatnURules + isLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
