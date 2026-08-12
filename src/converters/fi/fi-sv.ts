import { Text } from "types";

export const fiSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { fiLatnRules } = await import("data/fi-latn.rules");
  const { latnSvRules } = await import("data/latn-sv.rules");

  const transliterator = RBT.fromRules(fiLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
