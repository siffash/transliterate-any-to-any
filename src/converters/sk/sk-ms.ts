import { Text } from "types";

export const skMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { skLatnRules } = await import("data/sk/sk-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, skLatnRules + latnThTRules + latnMsRules);
};
