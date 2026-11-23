import { Text } from "types";

export const isPl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { isLatnRules } = await import("data/is/is-latn.rules");
  const { latnPlRules } = await import("data/latn/latn-pl.rules");

  return convertText(text, isLatnRules + latnPlRules);
};
