import { Text } from "types";

export const esPt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { esLatnRules } = await import("data/es/es-latn.rules");
  const { latnPtRules } = await import("data/latn/latn-pt.rules");
  const { latnKQuRules } = await import("data/latn/latn_k-qu.rules");

  return convertText(text, esLatnRules + latnPtRules + latnKQuRules);
};
