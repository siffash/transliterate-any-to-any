import { Text } from "types";

export const plBg = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { plLatnRules } = await import("constants/pl-latn.rules");
  const { latnBgRules } = await import("constants/latn-bg.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnBgRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
