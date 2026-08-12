import { Text } from "types";

export const plSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnSrRules } = await import("constants/latn-sr.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
