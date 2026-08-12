import { Text } from "types";

export const caCs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("constants/ca-latn.rules");
  const { latnCsRules } = await import("constants/latn-cs.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnCsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
