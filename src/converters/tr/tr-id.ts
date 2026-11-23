import { Text } from "types";

export const trId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { trLatnRules } = await import("data/tr/tr-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, trLatnRules + latnIdRules);
};
