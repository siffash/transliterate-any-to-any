import { Text } from "types";

export const lvSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");

  return convertText(text, lvLatnRules + latnXHRules + latnSvRules);
};
