import { Text } from "types";

export const thIs = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnIsRules } = await import("data/latn/latn-is.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnTRules + latnIsRules + "::Title;", {
    source: thLatn,
  });
};
