import { Text } from "types";

export const idAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { idLatnRules } = await import("constants/id-latn.rules");
  const { latnAzRules } = await import("constants/latn-az.rules");

  const transliterator = RBT.fromRules(idLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
