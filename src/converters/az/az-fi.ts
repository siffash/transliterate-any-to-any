import { Text } from "types";

export const azFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("constants/az-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
