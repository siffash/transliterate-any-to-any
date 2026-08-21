import { Text } from "types";

export const hyFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  const transliterator = RBT.fromRules(hyLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
