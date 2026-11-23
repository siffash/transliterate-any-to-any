import { Text } from "types";

export const zhLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnLtRules } = await import("data/zh/zh-latn_lt.rules");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");
  const { latnXHRules } = await import("data/latn/latn_x-h.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(
    text,
    zhLatnLtRules + zhLatnRules + latnIRules + latnXHRules + latnLtRules + latnVvRules,
    { source: zhLatn },
  );
};
