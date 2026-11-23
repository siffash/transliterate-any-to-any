import { Text } from "types";

export const etRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");
  const { latnRoARules } = await import("data/latn/latn-ro_a.rules");

  return convertText(text, etLatnRules + latnRoRules + latnRoARules);
};
