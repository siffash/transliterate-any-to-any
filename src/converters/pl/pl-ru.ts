import { Text } from "types";

export const plRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { plLatnCyrlRules } = await import("data/pl/pl-latn_cyrl.rules");
  const { plLatnRuRules } = await import("data/pl/pl-latn_ru.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");

  const transliterator = RBT.fromRules(plLatnCyrlRules + plLatnRules + plLatnRuRules + latnRuRules);

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
