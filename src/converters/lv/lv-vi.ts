import { Text } from "types";

export const lvVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, lvLatnRules + latnViRules);
};
