import { Text } from "types";

export const thTg = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKxRules } = await import("data/th/th-latn_kx.rules");
  const { thLatnTRules } = await import("data/th/th-latn_t.rules");
  const { latnTgRules } = await import("data/latn/latn-tg.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKxRules + thLatnTRules + latnTgRules + "::Title;", {
    source: thLatn,
  });
};
