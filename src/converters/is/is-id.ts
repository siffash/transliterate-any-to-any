import { Text } from "types";

export const isId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, isLatnRules + latnIdRules);
};
