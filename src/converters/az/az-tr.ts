import { Text } from "types";

export const azTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");

  return convertText(text, azLatnRules + latnTrRules);
};
