import { Text } from "types";

export const noAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { noLatnRules } = await import("data/no-latn.rules");
  const { latnAzRules } = await import("data/latn-az.rules");

  const transliterator = RBT.fromRules(noLatnRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
