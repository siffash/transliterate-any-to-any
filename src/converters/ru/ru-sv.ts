import { Text } from "types";

export const ruSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnDzjRules + latnSvRules);
};
