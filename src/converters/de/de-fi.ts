import { Text } from "types";

export const deFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { deLatnRules } = await import("constants/de-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(deLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
