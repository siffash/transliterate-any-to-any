import { Text } from "types";

export const nlSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { nlLatnSrRules } = await import("data/nl/nl-latn_sr.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(
    text,
    nlLatnRules + latnSilentHRules + latnUeRules + nlLatnSrRules + latnSrRules,
  );
};
