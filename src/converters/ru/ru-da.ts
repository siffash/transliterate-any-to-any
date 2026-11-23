import { Text } from "types";

export const ruDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnDaRules);
};
