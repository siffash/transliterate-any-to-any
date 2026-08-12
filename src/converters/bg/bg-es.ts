import { Text } from "types";

export const bgEs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("data/bg-latn.rules");
  const { latnEsRules } = await import("data/latn-es.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnEsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
