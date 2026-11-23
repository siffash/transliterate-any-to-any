import { Text } from "types";

export const etHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { etLatnHyRules } = await import("data/et/et-latn_hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, etLatnRules + etLatnHyRules + latnHyRules + hyEvRules);
};
