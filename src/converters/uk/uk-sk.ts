import { Text } from "types";

export const ukSk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnCsSoftRules } = await import("data/latn/latn-cs_soft.rules");
  const { ukLatnSoftLRules } = await import("data/uk/uk-latn_soft-l.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + latnCsSoftRules + ukLatnSoftLRules + latnSeparatorRules + latnSkRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
