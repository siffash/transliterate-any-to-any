import { Text } from "types";

export const etSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { etLatnEjRules } = await import("data/et/et-latn_ej.rules");

  const transliterator = RBT.fromRules(etLatnRules + etLatnEjRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
