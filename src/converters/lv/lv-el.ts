import { Text } from "types";

export const lvEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");

  return convertText(text, lvLatnRules + latnElRules);
};
