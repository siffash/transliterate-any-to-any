import { Text } from "types";

export const deVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, deLatnRules + latnViRules);
};
