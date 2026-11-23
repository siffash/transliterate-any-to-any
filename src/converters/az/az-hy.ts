import { Text } from "types";

export const azHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(text, azLatnRules + azLatnARules + latnHyRules + hyEvRules);
};
