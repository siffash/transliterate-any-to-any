import { Text } from "types";

export const ruLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnAiRules } = await import("data/latn/latn_ai.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(
    text,
    ruLatnRules + latnSeparatorRules + latnIjRules + latnAiRules + latnLbRules,
  );
};
