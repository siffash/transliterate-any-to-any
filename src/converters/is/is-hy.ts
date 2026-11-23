import { Text } from "types";

export const isHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnDlRules } = await import("data/is/is-latn_dl.rules");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, isLatnDlRules + isLatnRules + latnHyRules + hyEvRules);
};
