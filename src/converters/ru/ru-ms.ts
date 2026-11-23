import { Text } from "types";

export const ruMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnMsRules);
};
