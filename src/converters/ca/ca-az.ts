import { Text } from "types";

export const caAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { caLatnAyRules } = await import("data/ca/ca-latn_ay.rules");
  const { latnAzLyeRules } = await import("data/latn/latn-az_lye.rules");

  return convertText(text, caLatnAyRules + caLatnRules + latnAzLyeRules + latnAzRules);
};
