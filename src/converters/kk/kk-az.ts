import { Text } from "types";

export const kkAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
