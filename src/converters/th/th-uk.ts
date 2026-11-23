import { Text } from "types";

export const thUk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnXRules } = await import("data/th/th-latn_x.rules");
  const { latnUkRules } = await import("data/latn/latn-uk.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnXRules + latnUkRules + "::Title;", {
    source: thLatn,
  });
};
