import { Text } from "types";

export const bgAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, bgLatnRules + latnAzRules);
};
