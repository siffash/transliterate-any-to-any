import { Text } from "types";

export const hyUk = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnUkRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
