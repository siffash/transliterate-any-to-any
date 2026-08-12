import { Text } from "types";

export const caEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("data/ca-latn.rules");
  const { latnEtRules } = await import("data/latn-et.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
