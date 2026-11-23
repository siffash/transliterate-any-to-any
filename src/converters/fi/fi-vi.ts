import { Text } from "types";

export const fiVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { fiLatnRules } = await import("data/fi/fi-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, fiLatnRules + latnViRules);
};
