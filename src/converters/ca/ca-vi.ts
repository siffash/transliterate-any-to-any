import { Text } from "types";

export const caVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, caLatnRules + latnViRules);
};
