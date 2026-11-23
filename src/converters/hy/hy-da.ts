import { Text } from "types";

export const hyDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, hyLatnRules + latnDaRules);
};
