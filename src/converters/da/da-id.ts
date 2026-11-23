import { Text } from "types";

export const daId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { daLatnRules } = await import("data/da/da-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, daLatnRules + latnIdRules);
};
