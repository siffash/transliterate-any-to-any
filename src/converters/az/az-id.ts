import { Text } from "types";

export const azId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, azLatnRules + latnIdRules);
};
