import { Text } from "types";

export const ukIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnIsRules);
};
