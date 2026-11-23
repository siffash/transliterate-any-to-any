import { Text } from "types";

export const azRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { azLatnARules } = await import("data/az/az-latn_a.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, azLatnRules + azLatnARules + latnRoRules);
};
