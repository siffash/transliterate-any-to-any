import { Text } from "types";

export const hyAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("constants/hy-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
