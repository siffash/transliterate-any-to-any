import { Text } from "types";

export const skHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk-latn.rules");
  const { latnHrRules } = await import("data/latn-hr.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
