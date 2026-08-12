import { Text } from "types";

export const esSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es-latn.rules");
  const { latnSrRules } = await import("data/latn-sr.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
