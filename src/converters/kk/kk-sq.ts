import { Text } from "types";

export const kkSq = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnSqRules } = await import("data/latn/latn-sq.rules");

  return convertText(text, kkLatnRules + latnSqRules);
};
