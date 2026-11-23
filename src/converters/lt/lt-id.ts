import { Text } from "types";

export const ltId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { ltLatnRules } = await import("data/lt/lt-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, ltLatnRules + latnIdRules);
};
