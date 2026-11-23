import { Text } from "types";

export const slBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { slLatnRules } = await import("data/sl/sl-latn.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");

  return convertText(text, slLatnRules + latnBgRules);
};
