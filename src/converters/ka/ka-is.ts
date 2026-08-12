import { Text } from "types";

export const kaIs = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka-latn.rules");
  const { latnIsRules } = await import("data/latn-is.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnIsRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
