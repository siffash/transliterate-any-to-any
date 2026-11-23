import { Text } from "types";

export const mtVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { mtLatnRules } = await import("data/mt/mt-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, mtLatnRules + latnViRules);
};
