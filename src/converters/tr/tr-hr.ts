import { Text } from "types";

export const trHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
