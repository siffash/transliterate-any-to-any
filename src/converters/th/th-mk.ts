import { Text } from "types";

export const thMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { thLatnRules } = await import("data/th/th-latn.rules");
  const { thLatnKxRules } = await import("data/th/th-latn_kx.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");
  const { latnMkVvRules } = await import("data/latn/latn-mk_vv.rules");
  const { thLatn } = await import("converters/th/th-latn");

  return convertText(text, thLatnRules + thLatnKxRules + latnMkRules + latnMkVvRules + "::Title;", {
    source: thLatn,
  });
};
