import { Text } from "types";

export const daEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnEsRules);
};
