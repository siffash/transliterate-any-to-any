import { Text } from "types";

export const daSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnSrRules);
};
