import { Text } from "types";

export const huKa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnEoHoldRules } = await import("data/hu/hu-latn_eo-hold.rules");
  const { huLatnEoRestoreRules } = await import("data/hu/hu-latn_eo-restore.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyDropRules } = await import("data/hu/hu-latn_gy-drop.rules");
  const { latnKaRules } = await import("data/latn/latn-ka.rules");
  const { latnKaIuRules } = await import("data/latn/latn-ka_iu.rules");

  return convertText(
    text,
    huLatnEoHoldRules +
      huLatnRules +
      huLatnEoRestoreRules +
      huLatnYRules +
      huLatnGyDropRules +
      latnKaIuRules +
      latnKaRules,
  );
};
