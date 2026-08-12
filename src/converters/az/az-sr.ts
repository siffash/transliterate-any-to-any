import { Text } from "types";

export const azSr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az-latn.rules");
  const { latnSrRules } = await import("data/latn-sr.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnSrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
