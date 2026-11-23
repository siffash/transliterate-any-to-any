import { Text } from "types";

export const zhSv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnSvRules } = await import("data/latn/latn-sv.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIRules + latnXHRules + latnSvRules, {
    source: zhLatn,
  });
};
