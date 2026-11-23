import { Text } from "types";

export const etDa = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnDaRules } = await import("data/latn/latn-da.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, etLatnRules + latnIRules + latnDaRules);
};
