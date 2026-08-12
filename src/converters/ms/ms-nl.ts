import { Text } from "types";

export const msNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { msLatnRules } = await import("constants/ms-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(msLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
