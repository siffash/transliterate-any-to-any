import { Text } from "types";

export const caUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
