import { Text } from "types";

export const csMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { csLatnRules } = await import("data/cs/cs-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, csLatnRules + latnThTRules + latnMsRules);
};
