import { Text } from "types";

export const nlEs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnEsRules } = await import("data/latn/latn-es.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + latnEsRules);
};
