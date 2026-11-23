import { Text } from "types";

export const ukSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnDzjRules } = await import("data/latn/latn_dzj.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnDzjRules + latnSvRules);
};
