import { Text } from "types";

export const fiNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi-latn.rules");
  const { latnNoRules } = await import("data/latn-no.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
