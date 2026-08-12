import { Text } from "types";

export const msIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnIsRules } = await import("constants/latn-is.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
