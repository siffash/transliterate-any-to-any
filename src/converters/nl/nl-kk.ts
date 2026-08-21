import { Text } from "types";

export const nlKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnKkRules } = await import("data/latn/latn-kk.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
