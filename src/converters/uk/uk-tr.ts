import { Text } from "types";

export const ukTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnTrRules);
};
