import { Text } from "types";

export const deSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");
  const { deLatnDtRules } = await import("data/de/de-latn_dt.rules");

  const transliterator = RBT.fromRules(deLatnRules + deLatnDtRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
