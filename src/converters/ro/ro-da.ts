import { Text } from "types";

export const roDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("constants/ro-latn.rules");
  const { latnDaRules } = await import("constants/latn-da.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
