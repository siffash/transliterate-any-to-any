import { Text } from "types";

export const roHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { roLatnRules } = await import("data/ro-latn.rules");
  const { latnHrRules } = await import("data/latn-hr.rules");

  const transliterator = RBT.fromRules(roLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
