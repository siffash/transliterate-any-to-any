import { Text } from "types";

export const deDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { deLatnRules } = await import("data/de/de-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, deLatnRules + latnDaRules + latnZSRules);
};
