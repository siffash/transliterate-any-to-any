import { Text } from "types";

export const itLt = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnLtRules } = await import("data/latn/latn-lt.rules");

  return convertText(text, itLatnRules + itLatnYeRules + latnLtRules);
};
