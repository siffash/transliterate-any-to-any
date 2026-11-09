import { Text } from "types";

export const isUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { isLatnURules } = await import("data/is/is-latn_u.rules");
  const { isLatnTlRules } = await import("data/is/is-latn_tl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { ukLlRules } = await import("data/uk/uk_ll.rules");
  const { ukLRules } = await import("data/uk/uk_l.rules");

  const transliterator = RBT.fromRules(
    isLatnTlRules + isLatnURules + isLatnRules + latnUkRules + ukLlRules + ukLRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
