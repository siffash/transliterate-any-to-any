import { Text } from "types";

export const jaEl = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { jaLatnRules } = await import("data/ja/ja-latn.rules");
  const { latnElRules } = await import("data/latn/latn-el.rules");
  const { jaLatn } = await import("converters/ja/ja-latn");

  return convertText(text, jaLatnRules + latnElRules, {
    source: words => jaLatn(words, { units: false }),
  });
};
