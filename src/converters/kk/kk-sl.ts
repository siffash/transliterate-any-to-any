import { Text } from "types";

export const kkSl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { kkLatnORules } = await import("data/kk/kk-latn_o.rules");
  const { latnSlRules } = await import("data/latn/latn-sl.rules");

  return convertText(text, kkLatnRules + kkLatnORules + latnSlRules);
};
