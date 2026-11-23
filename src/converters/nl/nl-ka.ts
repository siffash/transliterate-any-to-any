import { Text } from "types";

export const nlKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");

  return convertText(text, nlLatnRules + latnSilentHRules + latnKaRules);
};
