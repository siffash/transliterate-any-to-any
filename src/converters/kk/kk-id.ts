import { Text } from "types";

export const kkId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, kkLatnRules + latnIdRules);
};
