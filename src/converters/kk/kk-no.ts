import { Text } from "types";

export const kkNo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnNoRules } = await import("data/latn/latn-no.rules");

  return convertText(text, kkLatnRules + kkLatnORules + latnNoRules);
};
