import { Text } from "types";

export const azVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, azLatnRules + latnViRules);
};
