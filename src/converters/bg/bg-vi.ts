import { Text } from "types";

export const bgVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, bgLatnRules + latnViRules);
};
