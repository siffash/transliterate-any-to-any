import { Text } from "types";

export const lvNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { lvLatnRules } = await import("data/lv/lv-latn.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, lvLatnRules + latnNoRules);
};
