import { Text } from "types";

export const etVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, etLatnRules + latnViRules);
};
