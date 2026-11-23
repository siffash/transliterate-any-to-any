import { Text } from "types";

export const noId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { noLatnRules } = await import("data/no/no-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, noLatnRules + latnIdRules);
};
