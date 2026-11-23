import { Text } from "types";

export const kaRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kaLatnRules } = await import("data/ka/ka-latn.rules");
  const { latnDzRules } = await import("data/latn/latn_dz.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, kaLatnRules + latnDzRules + latnRoRules);
};
