import { Text } from "types";

export const ukEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk-latn.rules");
  const { latnEtRules } = await import("data/latn-et.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
