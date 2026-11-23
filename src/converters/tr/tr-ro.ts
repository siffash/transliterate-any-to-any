import { Text } from "types";

export const trRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");

  return convertText(text, trLatnRules + latnRoRules + latnRoARules);
};
