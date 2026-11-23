import { Text } from "types";

export const kkMt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { kkLatnRules } = await import("data/kk/kk-latn.rules");
  const { latnMtRules } = await import("data/latn/latn-mt.rules");

  return convertText(text, kkLatnRules + latnMtRules);
};
