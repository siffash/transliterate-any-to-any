import { Text } from "types";

export const ukFi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIjIRules } = await import("data/latn/latn_ij-i.rules");
  const { latnFiRules } = await import("data/latn/latn-fi.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnIjIRules + latnFiRules);
};
