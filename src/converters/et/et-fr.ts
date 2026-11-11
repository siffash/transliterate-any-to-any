import { Text } from "types";

export const etFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnIRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
