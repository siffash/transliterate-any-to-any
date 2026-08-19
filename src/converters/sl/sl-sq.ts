import { Text } from "types";

export const slSq = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnSqRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
