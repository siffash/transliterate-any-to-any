import { Text } from "types";

export const svKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnKaRules);
};
