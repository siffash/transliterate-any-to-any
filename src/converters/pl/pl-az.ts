import { Text } from "types";

export const plAz = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnHXRules } = await import("data/latn/latn_h-x.rules");

  const transliterator = RBT.fromRules(plLatnRules + latnHXRules + latnAzRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
