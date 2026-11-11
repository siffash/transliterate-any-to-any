import { Text } from "types";

export const roDe = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnDeRules } = await import("data/latn/latn-de.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnIRules + latnDeRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
