import { Text } from "types";

export const ukMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("data/uk-latn.rules");
  const { latnMsRules } = await import("data/latn-ms.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
