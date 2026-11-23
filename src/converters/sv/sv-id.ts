import { Text } from "types";

export const svId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { svLatnRules } = await import("data/sv/sv-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, svLatnRules + latnIdRules);
};
