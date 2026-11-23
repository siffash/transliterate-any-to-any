import { Text } from "types";

export const bgBs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnBsRules } = await import("data/latn/latn-bs.rules");

  return convertText(text, bgLatnRules + latnBsRules);
};
