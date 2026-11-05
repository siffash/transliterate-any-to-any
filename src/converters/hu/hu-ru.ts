import { Text } from "types";

export const huRu = async (text: Text) => {
  const { RBT } = await import("helpers/rbt");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnCyrlRules } = await import("data/hu/hu-latn_cyrl.rules");
  const { huLatnAiRules } = await import("data/hu/hu-latn_ai.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { huCyrlAiRules } = await import("data/hu/hu-cyrl_ai.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");

  const transliterator = RBT.fromRules(
    huLatnRules + huLatnCyrlRules + huLatnAiRules + latnRuRules + ruLlRules + huCyrlAiRules,
  );

  if (typeof text === "string") {
    return transliterator.transliterate(text);
  } else {
    return text.map(text => transliterator.transliterate(text));
  }
};
