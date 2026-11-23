import { Text } from "types";

export const itLv = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnLvRules } = await import("data/latn/latn-lv.rules");
  const { itLatnLvRules } = await import("data/it/it-latn_lv.rules");

  return convertText(text, itLatnRules + itLatnYeRules + itLatnLvRules + latnLvRules);
};
