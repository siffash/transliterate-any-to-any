import { Text } from "types";

export const kkDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, kkLatnRules + latnDaRules);
};
