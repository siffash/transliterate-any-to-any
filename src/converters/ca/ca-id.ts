import { Text } from "types";

export const caId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, caLatnRules + latnIdRules);
};
