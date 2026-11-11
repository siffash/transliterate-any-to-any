import { Text } from "types";

export const roFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnIRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
