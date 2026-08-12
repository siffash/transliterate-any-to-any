import { Text } from "types";

export const ukIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
