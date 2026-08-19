import { Text } from "types";

export const deMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
