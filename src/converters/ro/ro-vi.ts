import { Text } from "types";

export const roVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, roLatnRules + latnViRules);
};
