import { Text } from "types";

export const kkTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { kkLatnTgRules } = await import("data/kk/kk-latn_tg.rules");

  return convertText(text, kkLatnRules + kkLatnTgRules + latnTgRules);
};
