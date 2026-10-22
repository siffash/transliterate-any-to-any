import { Text } from "types";

export const azRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { azLatnCyrlRules } = await import("data/az/az-latn_cyrl.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(azLatnRules + azLatnCyrlRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
