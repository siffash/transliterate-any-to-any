import { Text } from "types";

export const bgDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bgLatnRules } = await import("data/bg/bg-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");

  return convertText(text, bgLatnRules + latnDaRules);
};
