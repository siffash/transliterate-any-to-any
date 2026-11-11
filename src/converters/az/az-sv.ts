import { Text } from "types";

export const azSv = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  const transliterator = RBT.fromRules(azLatnRules + latnIRules + latnSvRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
