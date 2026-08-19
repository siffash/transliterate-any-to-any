import { Text } from "types";

export const caAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  const transliterator = RBT.fromRules(caLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
