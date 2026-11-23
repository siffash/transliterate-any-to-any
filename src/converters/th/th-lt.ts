import { Text } from "types";

export const thLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { latnVvRules } = await import("data/latn/latn_vv.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules + thLatnKRules + thLatnTRules + latnLtRules + latnVvRules + "::Title;",
    { source: thLatn },
  );
};
