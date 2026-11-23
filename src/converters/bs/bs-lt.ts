import { Text } from "types";

export const bsLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { bsLatnRules } = await import("data/bs/bs-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, bsLatnRules + latnLtRules);
};
