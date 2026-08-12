import { Text } from "types";

export const roCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
