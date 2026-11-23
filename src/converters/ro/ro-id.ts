import { Text } from "types";

export const roId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { roLatnRules } = await import("data/ro/ro-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, roLatnRules + latnIdRules);
};
