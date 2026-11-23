import { Text } from "types";

export const ltDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, ltLatnRules + latnDaRules);
};
