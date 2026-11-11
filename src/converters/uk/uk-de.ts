import { Text } from "types";

export const ukDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + ukLatnJoRules + latnSeparatorRules + latnDeRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
