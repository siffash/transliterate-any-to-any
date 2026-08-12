import { Text } from "types";

export const noRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("constants/no-latn.rules");
  const { latnRoRules } = await import("constants/latn-ro.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
