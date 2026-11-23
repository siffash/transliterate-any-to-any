import { Text } from "types";

export const hrHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { latnHyCRules } = await import("data/latn/latn-hy_c.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, hrLatnRules + latnHyCRules + latnHyRules + hyEvRules);
};
