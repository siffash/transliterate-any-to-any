import { Text } from "types";

export const bnVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bnLatnRules } = await import("data/bn/bn-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, bnLatnRules + latnViRules);
};
