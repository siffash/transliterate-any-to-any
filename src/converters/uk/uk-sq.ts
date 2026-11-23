import { Text } from "types";

export const ukSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnSqRules);
};
