import { Text } from "types";

export const trVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, trLatnRules + latnViRules);
};
