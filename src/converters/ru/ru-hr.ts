import { Text } from "types";

export const ruHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnIjRules + latnHrRules);
};
