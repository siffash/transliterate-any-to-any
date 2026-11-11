import { Text } from "types";

export const etSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnIRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
