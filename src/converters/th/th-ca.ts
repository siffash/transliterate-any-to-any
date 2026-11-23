import { Text } from "types";

export const thCa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKRules } = await import("data/th/th-latn_k.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnCaRules } = await import("data/latn/latn-ca.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKRules + thLatnTRules + latnCaRules + "::Title;", {
    source: thLatn,
  });
};
