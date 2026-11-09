import { Text } from "types";

export const azRo = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  const transliterator = RBT.fromRules(azLatnRules + azLatnARules + latnRoRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
