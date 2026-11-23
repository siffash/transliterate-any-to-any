import { Text } from "types";

export const thMs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnMsRules } = await import("data/latn/latn-ms.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnTRules + latnMsRules + "::Title;", {
    source: thLatn,
  });
};
