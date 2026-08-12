import { Text } from "types";

export const hiFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { hiLatnRules } = await import("constants/hi-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(hiLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
