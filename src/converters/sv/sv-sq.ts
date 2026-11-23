import { Text } from "types";

export const svSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnSqRules);
};
