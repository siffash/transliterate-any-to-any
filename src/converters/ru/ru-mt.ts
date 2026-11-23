import { Text } from "types";

export const ruMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnMtRules);
};
