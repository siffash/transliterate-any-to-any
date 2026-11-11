import { Text } from "types";

export const plHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnIRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
