import { Text } from "types";

export const itRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnRoRules } = await import("data/it/it-latn_ro.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoKRules } = await import("data/latn/latn-ro_k.rules");

  const transliterator = RBT.fromRules(itLatnRules + itLatnRoRules + latnRoRules + latnRoKRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
