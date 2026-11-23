import { Text } from "types";

export const mtRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { ruLRules } = await import("data/ru/ru_l.rules");

  return convertText(text, mtLatnRules + latnRuRules + ruLRules);
};
