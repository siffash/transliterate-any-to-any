import { Text } from "types";

export const daSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnSqRules);
};
