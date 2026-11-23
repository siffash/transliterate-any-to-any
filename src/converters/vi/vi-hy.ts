import { Text } from "types";

export const viHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, viLatnRules + latnHyRules + hyEvRules);
};
