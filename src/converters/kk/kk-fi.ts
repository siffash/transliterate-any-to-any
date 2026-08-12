import { Text } from "types";

export const kkFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
