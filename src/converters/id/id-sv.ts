import { Text } from "types";

export const idSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnSvRules } = await import("constants/latn-sv.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
