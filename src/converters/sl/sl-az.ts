import { Text } from "types";

export const slAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, slLatnRules + latnAzRules);
};
