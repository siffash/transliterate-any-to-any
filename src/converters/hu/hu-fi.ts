import { Text } from "types";

export const huFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("constants/hu-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
