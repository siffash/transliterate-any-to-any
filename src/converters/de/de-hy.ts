import { Text } from "types";

export const deHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");
  const { deLatnHyRules } = await import("data/de/de-latn_hy.rules");

  return convertText(text, deLatnRules + deLatnHyRules + latnHyRules + hyEvRules);
};
