import { Text } from "types";

export const slNl = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("constants/sl-latn.rules");
  const { latnNlRules } = await import("constants/latn-nl.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnNlRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
