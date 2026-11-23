import { Text } from "types";

export const daVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnViRules);
};
