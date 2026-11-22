import { Text } from "types";

export const hyHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");
  const { hyLatnHuRules } = await import("data/hy/hy-latn_hu.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnHuRules + hyLatnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
