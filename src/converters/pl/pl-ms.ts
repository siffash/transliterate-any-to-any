import { Text } from "types";

export const plMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { plLatnRules } = await import("data/pl/pl-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, plLatnRules + latnIRules + latnThTRules + latnMsRules);
};
