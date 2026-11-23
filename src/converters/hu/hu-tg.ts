import { Text } from "types";

export const huTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { huLatnRules } = await import("data/hu/hu-latn.rules");
  const { huLatnYRules } = await import("data/hu/hu-latn_y.rules");
  const { huLatnYiRules } = await import("data/hu/hu-latn_yi.rules");
  const { huLatnGyDropRules } = await import("data/hu/hu-latn_gy-drop.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");

  return convertText(
    text,
    huLatnRules + huLatnYRules + huLatnYiRules + huLatnGyDropRules + latnTgRules,
  );
};
