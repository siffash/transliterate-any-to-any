import { Text } from "types";

export const kaId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { kaLatnRules } = await import("data/ka-latn.rules");
  const { latnIdRules } = await import("data/latn-id.rules");

  const transliterator = RBT.fromRules(kaLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
