import { Text } from "types";

export const noCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnCsRules } = await import("data/latn/latn-cs.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
