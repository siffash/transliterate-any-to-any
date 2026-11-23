import { Text } from "types";

export const azLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");

  return convertText(text, azLatnRules + latnLvUmlautRules + latnLvRules);
};
