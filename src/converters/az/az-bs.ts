import { Text } from "types";

export const azBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, azLatnRules + latnBsRules);
};
