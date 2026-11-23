import { Text } from "types";

export const slVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, slLatnRules + latnViRules);
};
