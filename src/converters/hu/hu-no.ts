import { Text } from "types";

export const huNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { huLatnRules } = await import("data/hu-latn.rules");
  const { latnNoRules } = await import("data/latn-no.rules");

  const transliterator = RBT.fromRules(huLatnRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
