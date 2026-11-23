import { Text } from "types";

export const zhEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnElRules, { source: zhLatn });
};
