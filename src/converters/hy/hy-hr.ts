import { Text } from "types";

export const hyHr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
