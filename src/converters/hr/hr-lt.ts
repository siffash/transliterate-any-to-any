import { Text } from "types";

export const hrLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, hrLatnRules + latnLtRules);
};
