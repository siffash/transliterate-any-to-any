import { Text } from "types";

export const hyAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy-latn.rules");
  const { latnAzRules } = await import("data/latn-az.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
