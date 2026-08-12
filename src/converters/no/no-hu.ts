import { Text } from "types";

export const noHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("constants/no-latn.rules");
  const { latnHuRules } = await import("constants/latn-hu.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
