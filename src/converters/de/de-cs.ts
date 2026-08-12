import { Text } from "types";

export const deCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de-latn.rules");
  const { latnCsRules } = await import("data/latn-cs.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
