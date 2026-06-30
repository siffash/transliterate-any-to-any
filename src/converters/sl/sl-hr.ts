import { Text } from "types";

export const slHr = async (text: Text) => {
  const { RBT } = await import("icu-transliterator");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnHrRules } = await import("constants/latn-hr.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
