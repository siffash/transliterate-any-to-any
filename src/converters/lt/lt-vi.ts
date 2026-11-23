import { Text } from "types";

export const ltVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, ltLatnRules + latnViRules);
};
