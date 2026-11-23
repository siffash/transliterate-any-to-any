import { Text } from "types";

export const huRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnCyrlRules } = await import("data/hu/hu-latn_cyrl.rules");
  const { huLatnAiRules } = await import("data/hu/hu-latn_ai.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { huCyrlAiRules } = await import("data/hu/hu-cyrl_ai.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  return convertText(
    text,
    huLatnRules +
      huLatnCyrlRules +
      huLatnAiRules +
      latnRuRules +
      ruLRules +
      ruLlRules +
      huCyrlAiRules,
  );
};
