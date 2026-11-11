import { Text } from "types";

export const ukCa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { ukLatnJoRules } = await import("data/uk/uk-latn_jo.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { latnLNRules } = await import("data/latn/latn_l-n.rules");

  const transliterator = RBT.fromRules(
    ukLatnRules + ukLatnJoRules + latnSeparatorRules + latnLNRules + latnCaRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
