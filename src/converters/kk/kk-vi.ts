import { Text } from "types";

export const kkVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, kkLatnRules + latnViRules);
};
