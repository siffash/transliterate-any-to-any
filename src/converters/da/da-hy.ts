import { Text } from "types";

export const daHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnSilentHRules } = await import("data/latn/latn_silent-h.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, daLatnRules + latnSilentHRules + latnHyRules + hyEvRules);
};
