import { Text } from "types";

export const slId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, slLatnRules + latnIdRules);
};
