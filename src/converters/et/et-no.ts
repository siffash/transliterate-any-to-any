import { Text } from "types";

export const etNo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(etLatnRules + latnIRules + latnNoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
