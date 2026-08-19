import { Text } from "types";

export const azHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
