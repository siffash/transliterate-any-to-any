import { Text } from "types";

export const isNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { isLatnRules } = await import("constants/is-latn.rules");
  const { latnNoRules } = await import("constants/latn-no.rules");

  const transliterator = RBT.fromRules(isLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
