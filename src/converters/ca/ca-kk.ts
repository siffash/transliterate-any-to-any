import { Text } from "types";

export const caKk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnKkRules } = await import("constants/latn-kk.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnKkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
