import { Text } from "types";

export const ltIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");

  return convertText(text, ltLatnRules + latnIsRules);
};
