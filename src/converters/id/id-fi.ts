import { Text } from "types";

export const idFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
