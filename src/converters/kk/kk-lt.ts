import { Text } from "types";

export const kkLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, kkLatnRules + kkLatnORules + latnLtRules);
};
