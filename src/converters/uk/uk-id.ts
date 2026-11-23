import { Text } from "types";

export const ukId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnIdRules);
};
