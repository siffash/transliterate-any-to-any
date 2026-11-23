import { Text } from "types";

export const daBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnBgRules);
};
