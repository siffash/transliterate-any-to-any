import { Text } from "types";

export const itMk = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { itLatnYeRules } = await import("data/it/it-latn_ye.rules");
  const { latnMkRules } = await import("data/latn/latn-mk.rules");

  return convertText(text, itLatnRules + itLatnYeRules + latnMkRules);
};
