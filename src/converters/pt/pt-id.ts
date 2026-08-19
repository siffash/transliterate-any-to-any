import { Text } from "types";

export const ptId = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { ptLatnRules } = await import("data/pt/pt-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  const transliterator = RBT.fromRules(ptLatnRules + latnIdRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
