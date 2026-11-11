import { Text } from "types";

export const caDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnDaRules + latnZSRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
