import { Text } from "types";

export const noBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
