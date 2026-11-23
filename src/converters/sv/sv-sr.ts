import { Text } from "types";

export const svSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnSrRules);
};
