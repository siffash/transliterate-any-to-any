import { Text } from "types";

export const bgId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");

  return convertText(text, bgLatnRules + latnIdRules);
};
