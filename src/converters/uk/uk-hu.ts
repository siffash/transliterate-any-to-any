import { Text } from "types";

export const ukHu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnHuRules } = await import("data/latn/latn-hu.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnHuRules);
};
