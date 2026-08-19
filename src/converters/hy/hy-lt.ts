import { Text } from "types";

export const hyLt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnLtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
