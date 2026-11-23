import { Text } from "types";

export const ltBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, ltLatnRules + latnBsRules);
};
