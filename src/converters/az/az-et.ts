import { Text } from "types";

export const azEt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { azLatnRules } = await import("data/az/az-latn.rules");
  const { latnEtRules } = await import("data/latn/latn-et.rules");

  return convertText(text, azLatnRules + latnEtRules);
};
