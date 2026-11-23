import { Text } from "types";

export const noMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnThTRules } = await import("data/latn/latn_th-t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, noLatnRules + latnThTRules + latnMsRules);
};
