import { Text } from "types";

export const thTr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnTrRules } = await import("data/latn/latn-tr.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKRules + thLatnTRules + latnTrRules + "::Title;", {
    source: thLatn,
  });
};
