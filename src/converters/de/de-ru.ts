import { Text } from "types";

export const deRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLlRules } = await import("data/ru/ru_ll.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");
  const { deLatnRuRules } = await import("data/de/de-latn_ru.rules");

  return convertText(text, deLatnRules + latnRuRules + ruLlRules + ruLRules + deLatnRuRules);
};
