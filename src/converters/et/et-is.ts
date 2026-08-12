import { Text } from "types";

export const etIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
