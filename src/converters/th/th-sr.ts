import { Text } from "types";

export const thSr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnSrRules } = await import("data/latn/latn-sr.rules");
  const { latnHardRules } = await import("data/latn/latn_hard.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(
    text,
    thLatnRules + thLatnKRules + thLatnTRules + latnHardRules + latnSrRules + "::Title;",
    { source: thLatn },
  );
};
