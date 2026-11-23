import { Text } from "types";

export const thBg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKxRules } = await import("data/th/th-latn_kx.rules");
  const { latnBgRules } = await import("data/latn/latn-bg.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKxRules + latnBgRules + "::Title;", {
    source: thLatn,
  });
};
