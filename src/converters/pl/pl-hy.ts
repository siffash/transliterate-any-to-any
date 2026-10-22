import { Text } from "types";

export const plHy = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnIRules } = await import("data/pl/pl-latn_i.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");

  const transliterator = RBT.fromRules(plLatnRules + plLatnIRules + latnHyRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
