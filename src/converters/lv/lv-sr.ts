import { Text } from "types";

export const lvSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { lvLatnRules } = await import("constants/lv-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(lvLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
