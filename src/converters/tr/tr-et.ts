import { Text } from "types";

export const trEt = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { trLatnRules } = await import("constants/tr-latn.rules");
  const { latnEtRules } = await import("constants/latn-et.rules");

  const transliterator = RBT.fromRules(trLatnRules + latnEtRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
