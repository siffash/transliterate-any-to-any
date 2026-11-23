import { Text } from "types";

export const sqVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { sqLatnRules } = await import("data/sq/sq-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, sqLatnRules + latnViRules);
};
