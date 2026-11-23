import { Text } from "types";

export const isMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnUeRules } = await import("data/latn/latn_ue.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, isLatnDlRules + isLatnRules + latnUeRules + latnMkRules);
};
