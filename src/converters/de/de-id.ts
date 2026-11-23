import { Text } from "types";

export const deId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, deLatnRules + latnIdRules);
};
