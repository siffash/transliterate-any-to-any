import { Text } from "types";

export const zhMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { zhLatnRules } = await import("data/zh/zh-latn.rules");
  const { latnMtGlideIRules } = await import("data/latn/latn-mt_glide-i.rules");
  const { latnMtGlideURules } = await import("data/latn/latn-mt_glide-u.rules");
  const { latnMtAoRules } = await import("data/latn/latn-mt_ao.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");
  const { zhLatn } = await import("converters/zh/zh-latn");

  return convertText(
    text,
    zhLatnRules + latnMtAoRules + latnMtGlideIRules + latnMtGlideURules + latnMtRules,
    {
      source: zhLatn,
    },
  );
};
