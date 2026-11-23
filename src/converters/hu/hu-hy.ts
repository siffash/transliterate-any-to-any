import { Text } from "types";

export const huHy = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyDropRules } = await import("data/hu/hu-latn_gy-drop.rules");
  const { latnHyRules } = await import("data/latn/latn-hy.rules");
  const { hyEvRules } = await import("data/hy/hy_ev.rules");

  return convertText(
    text,
    huLatnEoHoldRules +
      huLatnRules +
      huLatnEoRestoreRules +
      huLatnYRules +
      huLatnGyDropRules +
      latnHyRules +
      hyEvRules,
  );
};
