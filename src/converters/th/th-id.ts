import { Text } from "types";

export const thId = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnPRules } = await import("data/th/th-latn_p.rules");
  const { latnIdRules } = await import("data/latn/latn-id.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnPRules + latnIdRules + "::Title;", {
    source: thLatn,
  });
};
