import { Text } from "types";

export const isDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, isLatnRules + latnDaRules);
};
