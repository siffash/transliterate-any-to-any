import { Text } from "types";

export const hyIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, hyLatnRules + latnIsRules);
};
