import { Text } from "types";

export const ruBs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ruLatnRules } = await import("constants/ru-latn.rules");
  const { latnBsRules } = await import("constants/latn-bs.rules");

  const transliterator = RBT.fromRules(ruLatnRules + latnBsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
