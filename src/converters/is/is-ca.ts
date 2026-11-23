import { Text } from "types";

export const isCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");

  return convertText(text, isLatnRules + latnCaRules);
};
