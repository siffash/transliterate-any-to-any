import { Text } from "types";

export const noVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, noLatnRules + latnSilentHRules + latnViRules);
};
