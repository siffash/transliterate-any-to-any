import { Text } from "types";

export const ukDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + ukLatnJoRules + latnSeparatorRules + latnDaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
