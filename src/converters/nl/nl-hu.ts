import { Text } from "types";

export const nlHu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl-latn.rules");
  const { latnHuRules } = await import("data/latn-hu.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnHuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
