import { Text } from "types";

export const kkMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");

  return convertText(text, kkLatnRules + latnMsRules);
};
