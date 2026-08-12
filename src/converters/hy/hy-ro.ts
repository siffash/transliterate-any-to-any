import { Text } from "types";

export const hyRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy-latn.rules");
  const { latnRoRules } = await import("data/latn-ro.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
