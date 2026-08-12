import { Text } from "types";

export const slFr = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { slLatnRules } = await import("data/sl-latn.rules");
  const { latnFrRules } = await import("data/latn-fr.rules");

  const transliterator = RBT.fromRules(slLatnRules + latnFrRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
