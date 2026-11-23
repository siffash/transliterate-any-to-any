import { Text } from "types";

export const lvMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, lvLatnRules + latnMkRules);
};
