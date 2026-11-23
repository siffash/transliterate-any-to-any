import { Text } from "types";

export const hrId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, hrLatnRules + latnIdRules);
};
