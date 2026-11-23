import { Text } from "types";

export const ruBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjRules } = await import("data/latn/latn_ij.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnIjRules + latnBsRules);
};
