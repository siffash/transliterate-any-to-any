import { Text } from "types";

export const idSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { idLatnRules } = await import("data/id/id-latn.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
