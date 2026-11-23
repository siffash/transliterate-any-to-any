import { Text } from "types";

export const hySr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { hyLatnRules } = await import("data/hy/hy-latn.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");

  return convertText(text, hyLatnRules + latnSrRules);
};
