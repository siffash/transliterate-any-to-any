import { Text } from "types";

export const etNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnIRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
