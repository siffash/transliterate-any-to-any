import { Text } from "types";

export const trRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnCyrlRules } = await import("data/tr/tr-latn_cyrl.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(trLatnRules + trLatnCyrlRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
