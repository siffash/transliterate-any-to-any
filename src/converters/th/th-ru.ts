import { Text } from "types";

export const thRu = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKxRules } = await import("data/th/th-latn_kx.rules");
  const { thLatnRuRules } = await import("data/th/th-latn_ru.rules");
  const { latnRuRules } = await import("data/latn/latn-ru.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKxRules + thLatnRuRules + latnRuRules + "::Title;", {
    source: thLatn,
  });
};
