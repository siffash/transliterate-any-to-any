import { Text } from "types";

export const hrAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, hrLatnRules + latnAzRules);
};
