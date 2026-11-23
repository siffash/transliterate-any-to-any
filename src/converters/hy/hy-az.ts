import { Text } from "types";

export const hyAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");

  return convertText(text, hyLatnRules + latnAzRules);
};
