import { Text } from "types";

export const svEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, svLatnRules + latnSilentHRules + latnEsRules);
};
