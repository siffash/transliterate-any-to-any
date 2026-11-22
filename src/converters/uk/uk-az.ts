import { Text } from "types";

export const ukAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { ukLatnGRules } = await import("data/uk/uk-latn_g.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + latnSeparatorRules + ukLatnGRules + latnIRules + latnAzRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
