import { Text } from "types";

export const svAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { svLatnAzRules } = await import("data/sv/sv-latn_az.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, svLatnAzRules + svLatnRules + latnSilentHRules + latnAzRules);
};
