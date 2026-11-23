import { Text } from "types";

export const caDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { caLatnRules } = await import("data/ca/ca-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnZSRules } = await import("data/latn/latn_z-s.rules");

  return convertText(text, caLatnRules + latnDaRules + latnZSRules);
};
