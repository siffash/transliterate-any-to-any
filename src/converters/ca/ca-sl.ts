import { Text } from "types";

export const caSl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("data/ca-latn.rules");
  const { latnSlRules } = await import("data/latn-sl.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnSlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
