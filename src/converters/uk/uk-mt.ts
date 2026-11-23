import { Text } from "types";

export const ukMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnMtRules);
};
