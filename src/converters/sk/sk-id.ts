import { Text } from "types";

export const skId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  const transliterator = RBT.fromRules(skLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
