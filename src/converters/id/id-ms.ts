import { Text } from "types";

export const idMs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idMsRules } = await import("data/id/id-ms.rules");

  const transliterator = RBT.fromRules(idMsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
