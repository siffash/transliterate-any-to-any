import { Text } from "types";

export const nlMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");

  return convertText(
    text,
    nlLatnRules + latnSilentHRules + latnUeRules + latnMkRules + latnMkVvRules,
  );
};
