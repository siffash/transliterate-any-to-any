import { Text } from "types";

export const ukIt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnSeparatorRules } = await import("data/uk/uk-latn_separator.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + ukLatnSeparatorRules + latnItRules + latnItIiRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
