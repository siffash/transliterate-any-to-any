import { Text } from "types";

export const ukLb = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnLbRules } = await import("data/latn/latn-lb.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnLbRules);
};
