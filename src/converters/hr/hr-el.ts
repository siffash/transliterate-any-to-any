import { Text } from "types";

export const hrEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hrLatnRules } = await import("data/hr/hr-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, hrLatnRules + latnElRules);
};
