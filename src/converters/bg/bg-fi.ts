import { Text } from "types";

export const bgFi = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnFiRules } = await import("constants/latn-fi.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnFiRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
