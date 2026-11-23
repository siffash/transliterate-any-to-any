import { Text } from "types";

export const isNl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnNlRules } = await import("data/latn/latn-nl.rules");

  return convertText(text, isLatnRules + latnNlRules);
};
