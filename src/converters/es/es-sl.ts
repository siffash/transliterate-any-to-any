import { Text } from "types";

export const esSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { esLatnRules } = await import("data/es-latn.rules");
  const { latnSlRules } = await import("data/latn-sl.rules");

  const transliterator = RBT.fromRules(esLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
