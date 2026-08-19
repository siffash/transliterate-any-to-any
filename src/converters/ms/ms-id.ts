import { Text } from "types";

export const msId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msIdRules } = await import("data/ms/ms-id.rules");

  const transliterator = RBT.fromRules(msIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
