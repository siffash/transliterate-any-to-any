import { Text } from "types";

export const ltAz = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnAzRules } = await import("data/latn/latn-az.rules");
  const { latnAyRules } = await import("data/latn/latn_ay.rules");

  return convertText(text, ltLatnRules + latnAyRules + latnAzRules);
};
