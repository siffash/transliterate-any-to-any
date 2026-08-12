import { Text } from "types";

export const etFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { etLatnRules } = await import("constants/et-latn.rules");
  const { latnFrRules } = await import("constants/latn-fr.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
