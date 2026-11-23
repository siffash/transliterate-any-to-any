import { Text } from "types";

export const nlLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { nlLatnRules } = await import("data/nl/nl-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");

  return convertText(text, nlLatnRules + latnUeRules + latnLtRules + latnVvRules);
};
