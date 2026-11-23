import { Text } from "types";

export const lbVi = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lbLatn } = await import("converters/lb/lb-latn");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnViRules } = await import("data/latn/latn-vi.rules");

  return convertText(text, latnSilentHRules + latnViRules, { source: lbLatn });
};
