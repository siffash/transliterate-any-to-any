import { Text } from "types";

export const zhFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { zhLatnFrRules } = await import("data/zh/zh-latn_fr.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(text, zhLatnRules + latnIRules + zhLatnFrRules + latnFrRules, {
    source: zhLatn,
  });
};
