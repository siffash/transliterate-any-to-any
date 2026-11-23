import { Text } from "types";

export const ruVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ruLatnRules } = await import("data/ru/ru-latn.rules");
  const { latnSeparatorRules } = await import("data/latn/latn_separator.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, ruLatnRules + latnSeparatorRules + latnViRules);
};
