import { Text } from "types";

export const zhIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnItRules + latnItIiRules, { source: zhLatn });
};
