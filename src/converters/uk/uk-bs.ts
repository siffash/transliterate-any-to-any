import { Text } from "types";

export const ukBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnBsRules);
};
