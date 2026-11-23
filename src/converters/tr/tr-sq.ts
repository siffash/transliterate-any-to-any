import { Text } from "types";

export const trSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { trLatnIaRules } = await import("data/tr/tr-latn_ia.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, trLatnRules + trLatnIaRules + latnSqRules);
};
