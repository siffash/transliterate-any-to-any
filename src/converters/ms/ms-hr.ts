import { Text } from "types";

export const msHr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("data/ms-latn.rules");
  const { latnHrRules } = await import("data/latn-hr.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnHrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
