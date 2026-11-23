import { Text } from "types";

export const ukVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ukLatnRules } = await import("data/uk/uk-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, ukLatnRules + latnSeparatorRules + latnViRules);
};
