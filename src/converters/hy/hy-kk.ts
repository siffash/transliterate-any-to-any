import { Text } from "types";

export const hyKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
