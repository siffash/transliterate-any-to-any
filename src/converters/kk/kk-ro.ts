import { Text } from "types";

export const kkRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnQKRules } = await import("data/latn/latn_q-k.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, kkLatnRules + latnQKRules + latnRoRules);
};
