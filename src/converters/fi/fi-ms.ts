import { Text } from "types";

export const fiMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi-latn.rules");
  const { latnMsRules } = await import("data/latn-ms.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
