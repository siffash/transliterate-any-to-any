import { Text } from "types";

export const caKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { caLatnRuSRules } = await import("data/ca/ca-latn_ru-s.rules");

  return convertText(text, caLatnRuSRules + caLatnRules + latnKaRules);
};
