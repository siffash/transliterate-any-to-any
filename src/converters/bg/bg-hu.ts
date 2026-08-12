import { Text } from "types";

export const bgHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { bgLatnRules } = await import("constants/bg-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(bgLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
