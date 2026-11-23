import { Text } from "types";

export const ruIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnIsRules);
};
