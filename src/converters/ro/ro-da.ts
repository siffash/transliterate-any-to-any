import { Text } from "types";

export const roDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnIRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
