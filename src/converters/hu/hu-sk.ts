import { Text } from "types";

export const huSk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnSkRules } = await import("data/latn/latn-sk.rules");

  return convertText(
    text,
    huLatnEoHoldRules +
      huLatnRules +
      huLatnEoRestoreRules +
      huLatnYRules +
      huLatnGyRules +
      latnSkRules,
  );
};
