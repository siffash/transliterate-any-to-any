import { Text } from "types";

export const caLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");
  const { esCaLatnLtRules } = await import("data/latn/es_ca-latn_lt.rules");

  return convertText(text, caLatnRules + esCaLatnLtRules + latnLtRules);
};
