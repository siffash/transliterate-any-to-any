import { Text } from "types";

export const deUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { deLatnUkRules } = await import("data/de/de-latn_uk.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnUkRules + deLatnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
