import { Text } from "types";

export const itDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { itLatnRules } = await import("data/it/it-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, itLatnRules + latnDaRules + latnZSRules);
};
