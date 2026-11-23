import { Text } from "types";

export const thIt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { latnItRules } = await import("data/latn/latn-it.rules");
  const { latnItIiRules } = await import("data/latn/latn-it_ii.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + latnItRules + latnItIiRules + "::Title;", {
    source: thLatn,
  });
};
