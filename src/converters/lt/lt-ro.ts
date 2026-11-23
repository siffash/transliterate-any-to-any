import { Text } from "types";

export const ltRo = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnRoRules } = await import("data/latn/latn-ro.rules");

  return convertText(text, ltLatnRules + latnRoRules);
};
