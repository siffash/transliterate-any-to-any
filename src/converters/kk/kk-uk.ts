import { Text } from "types";

export const kkUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("constants/kk-latn.rules");
  const { latnUkRules } = await import("constants/latn-uk.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
