import { Text } from "types";

export const ruNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnNoRules);
};
