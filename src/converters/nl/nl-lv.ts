import { Text } from "types";

export const nlLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { nlLatnLvRules } = await import("data/nl/nl-latn_lv.rules");

  return convertText(text, nlLatnLvRules + nlLatnRules + latnSilentHRules + latnLvRules);
};
