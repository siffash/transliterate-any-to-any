import { Text } from "types";

export const kkIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, kkLatnRules + latnIsRules);
};
