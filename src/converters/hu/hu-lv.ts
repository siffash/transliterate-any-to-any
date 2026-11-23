import { Text } from "types";

export const huLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnGyRules } = await import("data/hu/hu-latn_gy.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { latnLvUmlautRules } = await import("data/latn/latn-lv_umlaut.rules");
  const { huLatnLvRules } = await import("data/hu/hu-latn_lv.rules");

  return convertText(
    text,
    huLatnLvRules + huLatnRules + huLatnYRules + huLatnGyRules + latnLvUmlautRules + latnLvRules,
  );
};
