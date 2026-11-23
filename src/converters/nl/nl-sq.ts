import { Text } from "types";

export const nlSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, nlLatnRules + latnVvRules + latnSilentHRules + latnSqRules);
};
