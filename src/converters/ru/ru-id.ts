import { Text } from "types";

export const ruId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnIdRules);
};
