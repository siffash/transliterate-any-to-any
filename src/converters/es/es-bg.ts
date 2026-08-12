import { Text } from "types";

export const esBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("constants/es-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
