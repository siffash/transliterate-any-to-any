import { Text } from "types";

export const etFr = async (text: Text) => {
  const { convertText } = await import("helpers/convertText");
  const { etLatnRules } = await import("data/et/et-latn.rules");
  const { latnFrRules } = await import("data/latn/latn-fr.rules");
  const { latnIRules } = await import("data/latn/latn_i.rules");

  return convertText(text, etLatnRules + latnIRules + latnFrRules);
};
