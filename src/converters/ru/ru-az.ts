import { Text } from "types";

export const ruAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { ruLatnAzRules } = await import("data/ru/ru-latn_az.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + ruLatnAzRules + latnAzRules);
};
