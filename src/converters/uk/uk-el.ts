import { Text } from "types";

export const ukEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnElRules);
};
