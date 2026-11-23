import { Text } from "types";

export const isVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, isLatnRules + latnViRules);
};
