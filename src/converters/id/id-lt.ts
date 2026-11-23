import { Text } from "types";

export const idLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { msIdLatnRules } = await import("data/latn/ms_id-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnLtNkRules } = await import("data/latn/latn-lt_nk.rules");

  return convertText(text, msIdLatnRules + latnLtNkRules + latnLtRules);
};
