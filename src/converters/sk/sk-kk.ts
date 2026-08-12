import { Text } from "types";

export const skKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("constants/sk-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
