import { Text } from "types";

export const ukMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnMsRules);
};
