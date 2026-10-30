import { Text } from "types";

export const trUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnOeRules } = await import("data/latn/latn_oe.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnOeRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
