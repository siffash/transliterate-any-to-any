import { Text } from "types";

export const skVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, skLatnRules + latnViRules);
};
