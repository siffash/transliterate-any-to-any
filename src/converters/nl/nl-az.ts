import { Text } from "types";

export const nlAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnAzQRules } = await import("data/latn/latn-az_q.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(
    text,
    nlLatnRules + latnSilentHRules + latnUeRules + latnAzQRules + latnAzRules,
  );
};
