import { Text } from "types";

export const etKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
