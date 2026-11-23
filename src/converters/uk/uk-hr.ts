import { Text } from "types";

export const ukHr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnHrRules } = await import("data/latn/latn-hr.rules");
  const { latnCyCRules } = await import("data/latn/latn_cy-c.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnCyCRules + latnHrRules);
};
