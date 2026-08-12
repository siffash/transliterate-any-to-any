import { Text } from "types";

export const hyUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy-latn.rules");
  const { latnUkRules } = await import("data/latn-uk.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
