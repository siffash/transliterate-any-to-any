import { Text } from "types";

export const huId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(
    text,
    huLatnEoHoldRules +
      huLatnRules +
      huLatnEoRestoreRules +
      huLatnYRules +
      huLatnGyRules +
      latnIdRules,
  );
};
