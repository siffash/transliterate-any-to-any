import { Text } from "types";

export const kkAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, kkLatnRules + latnAzRules);
};
