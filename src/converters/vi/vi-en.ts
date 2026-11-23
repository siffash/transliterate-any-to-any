import { Text } from "types";

export const viEn = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { viLatnRules } = await import("data/vi/vi-latn.rules");
  const { viLatnGRules } = await import("data/vi/vi-latn_g.rules");
  const { latnEnRules } = await import("data/latn/latn-en.rules");
  const { latnEnKhRules } = await import("data/latn/latn-en_kh.rules");

  return convertText(text, viLatnRules + viLatnGRules + latnEnKhRules + latnEnRules);
};
