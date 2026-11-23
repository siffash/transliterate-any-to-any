import { Text } from "types";

export const plRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");

  return convertText(text, plLatnRules + latnRoRules + latnRoARules);
};
