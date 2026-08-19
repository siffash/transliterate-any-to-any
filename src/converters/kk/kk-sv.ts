import { Text } from "types";

export const kkSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  const transliterator = RBT.fromRules(kkLatnRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
