import { Text } from "types";

export const ukFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ukLatnRules } = await import("constants/uk-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(ukLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
