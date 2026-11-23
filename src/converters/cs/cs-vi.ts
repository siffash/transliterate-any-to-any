import { Text } from "types";

export const csVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, csLatnRules + latnViRules);
};
