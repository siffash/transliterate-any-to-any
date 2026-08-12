import { Text } from "types";

export const nlDa = async (text: Text) => {
  const { RBT } = await import("helpers/rbt-distributor");
  const { nlLatnRules } = await import("data/nl-latn.rules");
  const { latnDaRules } = await import("data/latn-da.rules");

  const transliterator = RBT.fromRules(nlLatnRules + latnDaRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
